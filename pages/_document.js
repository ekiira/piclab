import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://cloud.typography.com/6929016/7418832/css/fonts.css"
            rel="stylesheet"
          ></link>
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet"></link>
          <script src="https://kit.fontawesome.com/117bcfe378.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}