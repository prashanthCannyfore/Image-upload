import React, { useState } from "react";

const FormDhrFieldTitles = {
  ServiceProvided: "Service Provided",
  OtherPlacement: "Other Placement",
  PrescreeningRequirement: "Pre-screening Requirement",
  AcceptableCandidate: "Acceptable Candidate",
  ServiceWarranty: "Service Warranty",
  OnboardingRequirements: "On-boarding Requirements",
  RecordRetention: "Record Retention",
  PaymentTerms: "Payment Terms",
  InvoiceTerms: "Invoice Terms",
  InvoiceFormat: "Invoice Format",
  Fee: "Fee",
  Feenotpayableif: "Fee not payable if",
  SendInvoiceTo: "Send Invoice To",
  OtherDisputeResolution: "Other Dispute Resolution",
  OtherRecruitingRequirement: "Other Recruiting Requirement",
  Guarantee: "Guarantee",
  NonSolicitation: "Non-Solicitation",
  Taxes: "Taxes",
  Notices: "Notices",
  ImportantNotes: "Important Notes",
};
 
const NewComponet = () => {
  const [search, setSearch] = useState("");

  const entries = Object.entries(FormDhrFieldTitles);
  const filtered = entries.filter(([key, value]) => {
    return (
      key.toLowerCase().includes(search.toLowerCase()) ||
      value.toLowerCase().includes(search.toLowerCase())
    );
  });

  

  //   const filtered = entries.filter(({ label }) => {
  //     return label.toLowerCase().includes(search.toLowerCase())
  //   }); 


  return (
    <div style={{ padding: "20px" }}>
      <h2>search</h2>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filtered.map(([key, val]) => (
          <div
            key={key}
            style={{
              flex: "0 0 calc(33.33% - 20px)",
              boxSizing: "border-box",
            }}
          >
            <label style={{ display: "block", marginBottom: "5px" }}>
              {val}
            </label>
            <input
              type="text"
              placeholder={`Enter ${val}`}
              style={{
                width: "100%",
                padding: "8px",
              }}
            />
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p style={{ color: "gray", marginTop: "20px" }}>
          No matching fields found.
        </p>
      )}
    </div>
  );
};

export default NewComponet;
