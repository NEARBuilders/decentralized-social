// root of application, entry point for all other routes.
// wraps all other routes in the application.
import { createRootRoute } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import * as React from "react";
import { css } from "../styles/styles";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Build Agency - NEAR Ecosystem",
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div className="gradient-bg"></div>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <script src="https://ipfs.web4.near.page/ipfs/bafybeif7ouv5ehif36r6x3eugd3ylh6xyh24a22bbtoxeedwv5d6z45b64/runtime.16dff383504878412235.bundle.js" defer></script>
        <script src="https://ipfs.web4.near.page/ipfs/bafybeif7ouv5ehif36r6x3eugd3ylh6xyh24a22bbtoxeedwv5d6z45b64/main.aa9e3c38977e2375a119.bundle.js" defer></script>
      </Head>
      <Body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
