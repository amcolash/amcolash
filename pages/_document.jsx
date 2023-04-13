import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Colors } from '../lib/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV === 'production' && (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114681426-1"></script>
              <script>
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'UA-114681426-1');`}
              </script>
            </>
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
          <style>{`
            body.dark-mode { background: ${Colors.Black}; color: ${Colors.White}; }
            body.light-mode { background: ${Colors.White}; color: ${Colors.Black}; }
            .light-mode :focus, .dark-mode .resume :focus { outline: 3px solid ${Colors.Black}; }
            .dark-mode :focus { outline: 3px solid ${Colors.White}; outline-offset: 2px; }
            * { transition: background 0.25s; }
            a { transition: color 0.25s; }
            .post img, .project img { max-width: 100%; }
          `}</style>
        </Head>
        <body>
          <script src="/noflash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
