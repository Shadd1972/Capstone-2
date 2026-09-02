import { useState } from "react";

const INSURANCE_TYPES = ["Auto", "Home", "Life", "Renters"];

function ClaimsPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  }

  if (submitted) {
    return (
      <div className="claims-page">
        <div className="page-hero page-hero--claims">
          <div className="page-hero-text">
            <h1>Claims</h1>
            <p>We're here to help when it matters most.</p>
          </div>
        </div>
        <h1>Claims</h1>
        <div className="claims-confirmation">
          <p className="message success">
            ✓ Your claim has been submitted. A representative will contact you within 1–2 business days.
          </p>
          <button className="primary-btn" style={{ width: "auto", padding: "10px 24px" }}
            onClick={() => setSubmitted(false)}>
            Submit Another Claim
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="claims-page">
      <h1>Claims</h1>

      {!showForm ? (
        <div className="no-claims">
          <p>No active claims on your account.</p>
          <button
            className="primary-btn"
            style={{ width: "auto", padding: "10px 24px" }}
            onClick={() => setShowForm(true)}
          >
            Submit a Claim
          </button>
        </div>
      ) : (
        <form className="quote-form" onSubmit={handleSubmit}>
          <h2>Submit a Claim</h2>

          <label htmlFor="claim-name">Full Name</label>
          <input id="claim-name" type="text" required placeholder="Jane Smith" />

          <label htmlFor="claim-address">Address</label>
          <input id="claim-address" type="text" required placeholder="123 Main St, City, State ZIP" />

          <label htmlFor="claim-phone">Phone Number</label>
          <input id="claim-phone" type="tel" required placeholder="(555) 000-0000" />

          <label htmlFor="claim-policy">Policy Number (if known)</label>
          <input id="claim-policy" type="text" placeholder="EG-000000" />

          <label htmlFor="claim-insurance-type">Insurance Type</label>
          <select id="claim-insurance-type" required>
            <option value="">-- Select --</option>
            {INSURANCE_TYPES.map((t) => (
              <option key={t} value={t.toLowerCase()}>{t}</option>
            ))}
          </select>

          <label htmlFor="claim-type">Type of Claim</label>
          <input id="claim-type" type="text" required placeholder="e.g. Vehicle collision, Water damage" />

          <label htmlFor="claim-description">Claim Details</label>
          <textarea
            id="claim-description"
            required
            rows={5}
            placeholder="Please describe what happened, when it occurred, and any other relevant details."
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "1rem", resize: "vertical" }}
          />

          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <button type="submit" className="primary-btn">Submit Claim</button>
            <button type="button" className="primary-btn"
              style={{ background: "var(--muted)" }}
              onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ClaimsPage;
