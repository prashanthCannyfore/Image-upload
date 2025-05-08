// import React, { useState } from "react";

// const SearchComponent = () => {
//   const [labelSearch, SetLabelSearch] = useState("");

//   const inputConfigs = [
//     { label: "Resume Submitted via email or client system" },
//     { label: "Search" },
//     { label: "Resume Format" },
//     { label: "No. of submissions/position" },
//     { label: "Is RTR Required" },
//     { label: "Interview Type" },
//     { label: "Client Response Time" },
//   ];

//   const filteredConfigs = inputConfigs.filter((config) => {
//     if (!labelSearch.trim()) return true;
//     const searchWords = labelSearch.toLowerCase().split(" ");
//     const label = config.label.toLowerCase();
//     return searchWords.every((word) => label.includes(word));
//   });

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Search</h1>
//       <input
//         type="text"
//         placeholder="Search input labels..."
//         value={labelSearch}
//         onChange={(e) => SetLabelSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "100%",
//           marginBottom: "20px",
//           fontSize: "16px",
//         }}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {filteredConfigs.map((val, index) => (
//           <div
//             key={index}
//             style={{
//               flex: "0 0 calc(33.33% - 20px)", 
//               boxSizing: "border-box",
//             }}
//           >
//             <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" }}>
//               {val.label}
//             </label>
//             <input
//               type="text"
//               placeholder={`Enter ${val.label}`}
//               style={{
//                 padding: "8px",
//                 width: "100%",
//                 boxSizing: "border-box",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;


// // import React from 'react'

// // const SearchComponent = () => {

// //     const []
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default SearchComponent
// import React, { useState } from "react";

// const FormDhrFieldTitles = {
//   ServiceProvided: "Service Provided",
//   OtherPlacement: "Other Placement",
//   PrescreeningRequirement: "Pre-screening Requirement",
//   AcceptableCandidate: "Acceptable Candidate",
//   ServiceWarranty: "Service Warranty",
//   OnboardingRequirements: "On-boarding Requirements",
//   RecordRetention: "Record Retention",
//   PaymentTerms: "Payment Terms",
//   InvoiceTerms: "Invoice Terms",
//   InvoiceFormat: "Invoice Format",
//   Fee: "Fee",
//   Feenotpayableif: "Fee not payable if",
//   SendInvoiceTo: "Send Invoice To",
//   OtherDisputeResolution: "Other Dispute Resolution",
//   OtherRecruitingRequirement: "Other Recruiting Requirement",
//   Guarantee: "Guarantee",
//   NonSolicitation: "Non-Solicitation",
//   Taxes: "Taxes",
//   Notices: "Notices",
//   ImportantNotes: "Important Notes",
// };

// const SearchFormFields = () => {
//   const [search, setSearch] = useState("");
//   const [values, setValues] = useState({});

//   const entries = Object.entries(FormDhrFieldTitles); 

//   const filtered = entries.filter(([key, label]) => {
//     if (!search.trim()) return true;
//     const searchWords = search.toLowerCase().split(" ");
//     const labelLower = label.toLowerCase();
//     return searchWords.every((word) => labelLower.includes(word));
//   });

//   const handleChange = (field, value) => {
//     setValues((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search Form Fields</h2>
//       <input
//         type="text"
//         placeholder="Search labels..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "20px",
//           fontSize: "16px",
//         }}
//       />

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {filtered.map(([key, label]) => (
//           <div
//             key={key}
//             style={{
//               flex: "0 0 calc(33.33% - 20px)",
//               boxSizing: "border-box",
//             }}
//           >
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               {label}
//             </label>
//             <input
//               type="text"
//               placeholder={`Enter ${label}`}
//               value={values[key] || ""}
//               onChange={(e) => handleChange(key, e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "8px",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {filtered.length === 0 && (
//         <p style={{ color: "gray", marginTop: "20px" }}>
//           No matching fields found.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SearchFormFields;
// import React, { useState } from "react";

// const FormDhrFieldTitles = {
//   ServiceProvided: "Service Provided",
//   OtherPlacement: "Other Placement",
//   PrescreeningRequirement: "Pre-screening Requirement",
//   AcceptableCandidate: "Acceptable Candidate",
//   ServiceWarranty: "Service Warranty",
//   OnboardingRequirements: "On-boarding Requirements",
//   RecordRetention: "Record Retention",
//   PaymentTerms: "Payment Terms",
//   InvoiceTerms: "Invoice Terms",
//   InvoiceFormat: "Invoice Format",
//   Fee: "Fee",
//   Feenotpayableif: "Fee not payable if",
//   SendInvoiceTo: "Send Invoice To",
//   OtherDisputeResolution: "Other Dispute Resolution",
//   OtherRecruitingRequirement: "Other Recruiting Requirement",
//   Guarantee: "Guarantee",
//   NonSolicitation: "Non-Solicitation",
//   Taxes: "Taxes",
//   Notices: "Notices",
//   ImportantNotes: "Important Notes",
// };

// const NewComponent = () => {
//   const [search, setSearch] = useState("");

//   const entries = Object.entries(FormDhrFieldTitles);

//   const filtered = entries.filter(([key, label]) => {
//     if (!search.trim()) return true;
//     const searchWords = search.toLowerCase().split(" ");
//     const labelLower = label.toLowerCase();
//     return searchWords.every((word) => labelLower.includes(word));
//   });

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Search</h2>
//       <input
//         type="text"
//         placeholder="Search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           marginBottom: "20px",
//           fontSize: "16px",
//         }}
//       />
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {filtered.map(([key, val]) => (
//           <div
//             key={key}
//             style={{
//               flex: "0 0 calc(33.33% - 20px)",
//               boxSizing: "border-box",
//             }}
//           >
//             <label style={{ display: "block", marginBottom: "5px" }}>{val}</label>
//             <input
//               type="text"
//               placeholder={`Enter ${val}`}
//               style={{ width: "100%", padding: "8px" }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewComponent;

// import React, { useState, useEffect } from 'react';
// import './CustomScroll.css';

// const generateUsers = () => {
//   return Array.from({ length: 500 }, (_, i) => ({
//     id: i + 1,
//     clientCode: `C-${1000 + i}`,
//     clientName: `Client ${i + 1}`,
//     firstName: `First${i + 1}`,
//     lastName: `Last${i + 1}`,
//     email: `user${i + 1}@example.com`,
//     date: new Date(2025, 3, (i % 30) + 1).toLocaleDateString(),
//     active: i % 2 === 0,
//   }));
// };

// const columnVisibilityDefault = {
//   clientName: true,
//   fullName: true,
//   email: true,
//   date: true,
//   active: true,
// };

// const columnKeys = Object.keys(columnVisibilityDefault);

// export default function CustomScroll() {
//   const [fullList] = useState(generateUsers);    
//   const [visibleItems, setVisibleItems] = useState([]);
//   const [search, setSearch] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [columnVisibility, setColumnVisibility] = useState(columnVisibilityDefault);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 15;

//   const filteredList = fullList.filter(user =>
//     Object.entries(user).some(([key, value]) =>
//       String(value).toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   const loadMoreItems = () => {
//     const nextItems = filteredList.slice(currentIndex, currentIndex + itemsPerPage);
//     setVisibleItems(prev => [...prev, ...nextItems]);
//     setCurrentIndex(prev => prev + itemsPerPage);
//   };

//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
//       loadMoreItems();
//     }
//   };

//   useEffect(() => {
//     loadMoreItems();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setCurrentIndex(0);
//     setVisibleItems([]);
//     setTimeout(() => loadMoreItems(), 0);
//   }, [search]);

//   const toggleColumn = (column) => {
//     setColumnVisibility(prev => ({
//       ...prev,
//       [column]: !prev[column],
//     }));
//   };

//   return (
//     <div className="scroll-container">
//       <div className="header">
//         <div className="Search-parent">
//           <input
//             type="text"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             placeholder="Search all fields..."
//             className="search-input"
//           />
//           <button className="search-btn">SEARCH</button>
//         </div>
//         <div className="buttons">
//           <button onClick={() => setSearch('')} className="CLEAR">CLEAR</button>
//         </div>
//         <div className="IMPORT">
//           <button className="IMPORT">IMPORT</button>
//         </div>
//       </div>

//       <div className="top-controls">
//         <p className="scroll-count">
//           Showing {visibleItems.length} out of {fullList.length}
//         </p>
//         <button onClick={() => setShowDropdown(!showDropdown)} className="toggle-button">
//           Toggle Columns
//         </button>
//       </div>

//       {showDropdown && (
//         <div className="dropdown">
//           <h4>Toggle Columns</h4>
//           {columnKeys.map(col => (
//             <label key={col}>
//               <input
//                 type="checkbox"
//                 checked={columnVisibility[col]}
//                 onChange={() => toggleColumn(col)}
//               />
//               {col}
//             </label>
//           ))}
//         </div>
//       )}

//       <table> 
//         <thead>
//           <tr>
//             <th>Client Code</th>
//             {columnVisibility.clientName && <th>Client Name</th>}
//             {columnVisibility.fullName && <th>Full Name</th>}
//             {columnVisibility.email && <th>Email</th>}
//             {columnVisibility.date && <th>Date</th>}
//             {columnVisibility.active && <th>Active</th>}
//           </tr>
//         </thead>
        
//         <tbody>
//           {visibleItems.map(user => (
//             <tr key={user.id}>
//               <td>{user.clientCode}</td>
//               {columnVisibility.clientName && <td>{user.clientName}</td>}
//               {columnVisibility.fullName && <td>{user.firstName} {user.lastName}</td>}
//               {columnVisibility.email && <td>{user.email}</td>}
//               {columnVisibility.date && <td>{user.date}</td>}
//               {columnVisibility.active && <td>{user.active ? 'Active' : 'Inactive'}</td>}
//             </tr>
//           ))}
//           {!visibleItems.length && (
//             <tr>
//               <td colSpan="6" className="no-results">No matching records found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import './CustomScroll.css';

const generateUsers = () => {
  return Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    clientCode: `C-${1000 + i}`,
    clientName: `Client ${i + 1}`,
    firstName: `First${i + 1}`,
    lastName: `Last${i + 1}`,
    email: `user${i + 1}@example.com`,
    date: new Date(2025, 3, (i % 30) + 1).toLocaleDateString(),
    active: i % 2 === 0,
  }));
};

const columnVisibilityDefault = {
  clientName: true,
  fullName: true,
  email: true,
  date: true,
  active: true,
};

const columnKeys = Object.keys(columnVisibilityDefault);

export default function CustomScroll() {
  const [fullList] = useState(generateUsers);
  const [visibleItems, setVisibleItems] = useState([]);
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [columnVisibility, setColumnVisibility] = useState(columnVisibilityDefault);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tempSelectedClientNames, setTempSelectedClientNames] = useState([]);
  const [tempSelectedClientEmails, setTempSelectedClientEmails] = useState([]);
  const itemsPerPage = 15;

  const filteredList = fullList.filter(user =>
    Object.entries(user).some(([key, value]) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const loadMoreItems = () => {
    const nextItems = filteredList.slice(currentIndex, currentIndex + itemsPerPage);
    setVisibleItems(prev => [...prev, ...nextItems]);
    setCurrentIndex(prev => prev + itemsPerPage);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    loadMoreItems();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
    setVisibleItems([]);
    setTimeout(() => loadMoreItems(), 0);
  }, [search]);

  const toggleColumn = (column) => {
    setColumnVisibility(prev => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const allClientNames = [...new Set(fullList.map(user => user.clientName))];
  const allEmails = [...new Set(fullList.map(user => user.email))];

  const handleApplyFilters = () => {
    setCurrentIndex(0);
    setVisibleItems([]);
    setTimeout(() => loadMoreItems(), 0);
    setShowDropdown(false);
  };

  const handleResetFilters = () => {
    setTempSelectedClientNames([]);
    setTempSelectedClientEmails([]);
  };

  return (
    <div className="scroll-container">
      <div className="header">
        <div className="Search-parent">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search all fields..."
            className="search-input"
          />
          <button className="search-btn">SEARCH</button>
        </div>
        <div className="IMPORT">
          <button className="IMPORT">IMPORT</button>
        </div>
      </div>

      <div className="top-controls">
        <p className="scroll-count">
          Showing {visibleItems.length} out of {fullList.length}
        </p>
        <button onClick={() => setShowDropdown(!showDropdown)} className="toggle-button">
          Toggle Columns
        </button>
      </div>

      {showDropdown && (
        <div className="dropdown">
          <h4>Advanced Filter</h4>

          {/* Client Name Multi-select */}
          <label>
            Client Name:
            <div className="multi-select">
              <input
                type="text"
                placeholder="Search Client Names"
                onChange={(e) => {
                  const query = e.target.value.toLowerCase();
                  setTempSelectedClientNames(allClientNames.filter(name => name.toLowerCase().includes(query)));
                }}
              />
              <select
                multiple
                value={tempSelectedClientNames}
                onChange={(e) => setTempSelectedClientNames([...e.target.selectedOptions].map(o => o.value))}
              >
                {allClientNames.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </label>

          {/* Client Email Multi-select */}
          <label>
            Client Email:
            <div className="multi-select">
              <input
                type="text"
                placeholder="Search Client Emails"
                onChange={(e) => {
                  const query = e.target.value.toLowerCase();
                  setTempSelectedClientEmails(allEmails.filter(email => email.toLowerCase().includes(query)));
                }}
              />
              <select
                multiple
                value={tempSelectedClientEmails}
                onChange={(e) => setTempSelectedClientEmails([...e.target.selectedOptions].map(o => o.value))}
              >
                {allEmails.map(email => (
                  <option key={email} value={email}>
                    {email}
                  </option>
                ))}
              </select>
            </div>
          </label>

          <div className="filter-buttons">
            <button onClick={handleApplyFilters}>Apply</button>
            <button onClick={handleResetFilters}>Reset</button>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Client Code</th>
            {columnVisibility.clientName && <th>Client Name</th>}
            {columnVisibility.fullName && <th>Full Name</th>}
            {columnVisibility.email && <th>Email</th>}
            {columnVisibility.date && <th>Date</th>}
            {columnVisibility.active && <th>Active</th>}
          </tr>
        </thead>

        <tbody>
          {visibleItems.map(user => (
            <tr key={user.id}>
              <td>{user.clientCode}</td>
              {columnVisibility.clientName && <td>{user.clientName}</td>}
              {columnVisibility.fullName && <td>{user.firstName} {user.lastName}</td>}
              {columnVisibility.email && <td>{user.email}</td>}
              {columnVisibility.date && <td>{user.date}</td>}
              {columnVisibility.active && <td>{user.active ? 'Active' : 'Inactive'}</td>}
            </tr>
          ))}
          {!visibleItems.length && (
            <tr>
              <td colSpan="6" className="no-results">No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
