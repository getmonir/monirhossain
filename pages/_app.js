import Layout from '../components/Layout';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-781TZL953Q'
      ></script>
      <script>
        dangerouslySetInnerHTML=
        {{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-781TZL953Q');
            });
          `,
        }}
      </script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
