
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import store from "../store/index";
import React from "react";
import { Provider } from "react-redux";



export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}
