import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Layout } from './../layouts/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  

  return(
    <ThemeProvider attribute="class" defaultTheme="light">
    <Layout>
<Component {...pageProps} />
</Layout>
</ThemeProvider>

  );


/*
  <ThemeProvider attribute="class" defaultTheme="light">
        <Layout>
  <Component {...pageProps} />
  </Layout>
</ThemeProvider>

*/

}

export default MyApp



