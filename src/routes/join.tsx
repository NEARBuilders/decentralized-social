import { createFileRoute } from '@tanstack/react-router'
import { Layout } from '../components/layout'
import JoinButton from '../components/join-button';

export const Route = createFileRoute("/join")({
  component: Join,
});

function Join() {

  return (
    <Layout>
      <div className="join-container">
        <div className="document-container">
          <near-social-viewer src="hack.near/widget/AgreementPage" />
        </div>
        <div className="container-footer">
          <div className="button-container">
            <JoinButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}