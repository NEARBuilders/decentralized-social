import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="container">
      <h1>🏗️ Build Agency 🌳</h1>
      <p className="tagline">Connecting NEAR projects with developers</p>
      <div className="features">
        <div>🏢 Ecosystem Contributors</div>
        <div>👷 Skilled Developers</div>
        <div>🌿 Validator Fee Leverage</div>
      </div>
      <div className="container-footer">
        <div className="button-container">
          <Link to="/join" className="cta">Join 🚀</Link>
          <Link to="/stake" className="cta">Stake 🔒</Link>
        </div>
      </div>
    </div>
  );
}
