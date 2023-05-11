import "../styles/globals.scss";

import { AppProps } from "next/app";

type MyAppProps = AppProps & {
  // Add any additional custom props here
};

export default function App({ Component, pageProps }: MyAppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
