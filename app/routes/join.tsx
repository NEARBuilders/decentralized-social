import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/Layout'
import React from 'react'

export const Route = createFileRoute("/join")({
  component: Join,
});

function Join() {
  const handleSign = () => {
    // Implement signing logic here
    console.log("Document signed!");
  };

  return (
    <Layout>
      <div className="join-container">
        <div className="document-container">
          <near-social-viewer src="hack.near/widget/AgreementPage" />
        </div>
        <div className="container-footer">
          <div className="button-container">
        <button className="cta sign-button" onClick={handleSign}>Sign 📝</button>
        </div>
        </div>
      </div>
    </Layout>
  );
}