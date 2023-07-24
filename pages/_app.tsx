import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React, { useEffect } from "react";
import Navbar from "../components/UI/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}
