import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";
import "../App.css";

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <h1> React Monorepo Lifecycle</h1>
        <span className="badge">PNPM Workspace</span>
      </header>

      <main className="container">
        <section className="hero">
          <h2>
            Complete Frontend
            <span> Development Lifecycle</span>
          </h2>

          <p>
            A modern React monorepo architecture where multiple applications
            share reusable components, utilities, configurations, and workflows
            from one repository.
          </p>

          <div className="buttons">
            <Button
              onClick={() => {
                alert(formatCurrency(12345));
              }}
            />

            <button className="secondary-btn">Explore Architecture</button>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <h3>📦Shared Packages</h3>
            <p>
              Reusable UI components and utility functions shared between
              multiple React applications.
            </p>

            <div className="code">
              @repo/ui
              <br />
              @repo/utils
            </div>
          </div>

          <div className="card">
            <h3>⚛️ React Applications</h3>
            <p>
              Multiple frontend applications managed together with a single
              dependency and build system.
            </p>

            <div className="code">
              apps/
              <br />
              ├── customer-portal
              <br />
              └── admin-panel
            </div>
          </div>

          <div className="card">
            <h3>🚀 Automation</h3>
            <p>
              Complete development lifecycle including testing, versioning,
              CI/CD and deployment.
            </p>

            <div className="code">
              GitHub Actions
              <br />
              Semantic Release
              <br />
              Cloud Deployment
            </div>
          </div>
        </section>

        <section className="workflow">
          <h2>Monorepo Workflow</h2>

          <div className="steps">
            {["Code", "Lint", "Test", "Build", "Deploy"].map((step, index) => (
              <div className="step" key={step}>
                <strong>{index + 1}</strong>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <footer>Built with React + TypeScript + PNPM Monorepo</footer>
      </main>
    </div>
  );
}

export default App;
