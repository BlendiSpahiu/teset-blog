/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';

export const Layout = ({ content }) => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <main>{content}</main>
    </>
  );
};
