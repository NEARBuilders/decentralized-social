import React from "react";
import { Link } from "@tanstack/react-router";
import { useWallet } from "@/hooks/use-wallet";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = "" }: LayoutProps) {
  const { wallet, signedAccountId } = useWallet();

  return (
    <div className={`layout ${className}`}>
      <Link to="/" className="back-button">
        ← Back
      </Link>
      <div className="profile">
        {signedAccountId ? (
          <>
            <near-social-viewer
              src="mob.near/widget/Profile.InlineBlock"
              initialprops={JSON.stringify({
                accountId: signedAccountId,
                hideDescription: true,
              })}
            />
            <button
              onClick={() => wallet?.signOut()}
              style={{ float: "right", marginTop: "1rem" }}
            >
              logout
            </button>
          </>
        ) : (
          <><button
          onClick={() => wallet?.signIn()}
          style={{ float: "right", marginTop: "1rem" }}
        >
          login
        </button></>
        )}
      </div>
      <div className="layout-content">{children}</div>
    </div>
  );
}
