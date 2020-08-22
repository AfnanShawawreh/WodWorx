import Head from "next/head";


import Layout from "../components/Layout";
export default function Home() {
  return (
    <div>
    <Head>
      <title>Home page</title>
      <link rel="manifest" href="dunplab-manifest-7420.json"></link>
      <link rel="icon" href="/favicon.ico" />
      {/* <!-- Must --> */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>wordworx</title>

      {/* <!-- Android  --> */}
      <meta name="theme-color" content="red" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* <!-- iOS --> */}
      <meta name="apple-mobile-web-app-title" content="Application Title" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* <!-- Windows  --> */}
      <meta name="msapplication-navbutton-color" content="red" />
      <meta name="msapplication-TileColor" content="red" />
      <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
      <meta name="msapplication-config" content="browserconfig.xml" />

      {/* <!-- Pinned Sites  --> */}
      <meta name="application-name" content="Application Name" />
      <meta name="msapplication-tooltip" content="Tooltip Text" />
      <meta name="msapplication-starturl" content="/" />

      {/* <!-- Tap highlighting  --> */}
      <meta name="msapplication-tap-highlight" content="no" />

      {/* <!-- UC Mobile Browser  --> */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* <!-- Disable night mode for this page  --> */}
      <meta name="nightmode" content="enable/disable" />

      {/* <!-- Fitscreen  --> */}
      <meta name="viewport" content="uc-fitscreen=yes" />

      {/* <!-- Layout mode --> */}
      <meta name="layoutmode" content="fitscreen/standard" />

      {/* <!-- imagemode - show image even in text only mode  --> */}
      <meta name="imagemode" content="force" />

      {/* <!-- Orientation  --> */}
      <meta name="screen-orientation" content="portrait"></meta>
    </Head>

      <main>
      <Layout>
          <h1>Welcome to wordworx</h1>
        </Layout>
       
      </main>
    </div>
  );
}
