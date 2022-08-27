import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>PetPass</title>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
