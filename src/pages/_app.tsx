import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "../../node_modules/modern-normalize/modern-normalize.css";
import "../styles/globals.scss";
import "../styles/prism-gruvbox.scss";

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const url = "https://koka.dev";
  const title = "/var/log/koka";
  const description = "my log";

  return (
    <>
      <Head>
        <title>/var/log/koka</title>
        <meta key="title" name="title" content={title} />
        <meta key="description" name="description" content={description} />
        <meta key="theme-color" name="theme-color" content="#ddd4bb" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:url" property="og:url" content={url} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:site_name" property="og:site_name" content={title} />
        <meta key="og:image" property="og:image" content="https://koka831.github.io/img/icon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@k_0ka" />
        <meta name="twitter:description" content={description} />
        <link rel="alternate" type="application/rss+xml" href="https://koka831.github.io/feed.xml" title="/var/log/koka RSS2.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
