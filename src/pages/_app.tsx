import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Ganashy</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
