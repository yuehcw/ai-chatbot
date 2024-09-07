import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>AIC</span>
          </Link>
          <div className="user">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {/* <footer>
        copyright
      </footer> */}
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
