import React, { useState, useEffect, ChangeEvent, DragEvent } from "react";
import axios from "axios";


const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Converts a File to base64 and adds to state
  const addImage = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const newImg = {
        file,
        src: event.target?.result ,
        name: file.name,
      };
      setImages((prev) => [...prev, newImg]);
    };
    reader.readAsDataURL(file);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(addImage);
      setError(null);
    }
  };

  // Drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    Array.from(e.dataTransfer.files).forEach(addImage);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Paste support
  const handlePaste = (e) => {
    if (e.clipboardData?.items) {
      for (let item of e.clipboardData.items) {
        if (item.type.startsWith("image")) {
          const file = item.getAsFile();
          if (file) addImage(file);
        }
      }
    }
  };

  const handleDelete = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  }; 
   

  // Upload all images to the backend
  const handleUpload = async () => {
    if (images.length === 0) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    images.forEach((img) => formData.append("images", img.file));

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedUrls(res.data.files);
      setImages([]); 
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("paste", handlePaste );
    return () =>
      window.removeEventListener("paste", handlePaste );
  }, []);

  return (
    <div style={{ padding: 20 }}>

      {/* File input */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Drag-drop area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: "2px dashed #888",
          padding: 20,
          marginTop: 20,
          textAlign: "center",
          borderRadius: "8px",
        }}
      >
        Drag & drop images here or paste (Ctrl+V)
      </div>

      {/* Preview section */}
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ margin: 10, position: "relative" }}>
            <img
              src={img.src}
              alt={img.name}
              style={{ height: 100, marginRight: 10 }}
            />
            <button
              onClick={() => handleDelete(idx)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: 3,
                padding: "5px 10px",
                cursor: "pointer",
                marginTop: 5,
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Upload button */}
      <button
        onClick={handleUpload}
        disabled={loading || images.length === 0}
        style={{ marginTop: 20 }}
      >
        {loading ? "Uploading..." : "Upload to Server"}
      </button>

      {/* Error display */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Uploaded image display */}
      <div style={{ marginTop: 20 }}>
        <h3>Uploaded Images:</h3>
        {uploadedUrls.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt={`Uploaded-${idx}`}
            style={{ height: 100, marginRight: 10 }}
          />
        ))}
      </div>
    </div>
  );    
};

export default ImageUpload;
