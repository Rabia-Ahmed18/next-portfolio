import type { AppProps } from 'next/app';
import './globals.css'; // Assuming this contains global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
      </header>
      <Component {...pageProps} />
      <footer>
      </footer>
    </>
  );
}

export default MyApp;
