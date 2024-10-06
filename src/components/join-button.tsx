import { useWallet } from "../hooks/use-wallet";

export default function JoinButton() {
  const { signedAccountId } = useWallet();

  const handleSign = () => {
    // Implement signing logic here
    console.log("Document signed!", signedAccountId);
  };

  return (
    <button
      className="cta sign-button"
      onClick={handleSign}
      disabled={signedAccountId === undefined}
    >
      Sign 📝
    </button>
  );
}
