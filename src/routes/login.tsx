import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useWallet } from "../contexts/near";

export const Route = createFileRoute("/login")({
  component: LoginPage
});

export default function LoginPage() {
  const { wallet, signedAccountId } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (signedAccountId) {
      navigate({ to: "/" });
    }
  }, [signedAccountId]);

  const handleSignIn = () => {
    try {
      wallet!.signIn();
    } catch (e) {
      console.error("Wallet not configured properly");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl py-12">
        <button
          onClick={handleSignIn}
          className={
            "flex w-full justify-center rounded-md bg-orange-400 px-4 py-2 text-white transition-colors duration-200 ease-in-out hover:bg-orange-400/80"
          }
        >
          sign in
        </button>
      </div>
    </div>
  );
}