import React from 'react';
import { Link } from "@tanstack/react-router";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`layout ${className}`}>
      <Link to="/" className="back-button">← Back</Link>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}
