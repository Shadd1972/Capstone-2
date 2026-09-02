// App.tsx - the page shell the engineering team handed off.
// It runs today. Over the week you assemble the provided components into the
// marked slot below; you do not author them.

import { useState } from "react";
import QuoteForm from "./components/QuoteForm";
import RecentQuotes from "./components/RecentQuotes";
import ClaimsPage from "./components/ClaimsPage";
import AboutPage from "./components/AboutPage";
import { QuotesProvider } from "./context/QuotesContext";

const APP_TITLE =
  import.meta.env.VITE_APP_TITLE ?? "Evergreen Insurance - Get a Quote";
document.title = APP_TITLE;

type Page = "coverage" | "claims" | "about";

function App() {
  const [activePage, setActivePage] = useState<Page>("coverage");

  return (
    <QuotesProvider>
      <header className="site-header">
        <div className="brand">Evergreen Insurance</div>
        <nav className="site-nav">
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("coverage"); }}>Coverage</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("claims"); }}>Claims</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("about"); }}>About</a>
        </nav>
      </header>

      <main className="page">
        {activePage === "coverage" && (
          <>
            <section className="hero">
              <h1>Coverage that grows with you</h1>
              <p>Get an estimated premium in under a minute, no account needed.</p>
            </section>
            <section className="quote-form-section">
              <QuoteForm />
              <RecentQuotes />
            </section>
          </>
        )}
        {activePage === "claims" && <ClaimsPage />}
        {activePage === "about" && <AboutPage />}
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Evergreen Insurance. Sample training project.</p>
      </footer>
    </QuotesProvider>
  );
}

export default App;
