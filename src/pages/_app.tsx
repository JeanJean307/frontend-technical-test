import type { AppProps } from 'next/app'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import '../styles/globals.css'
import Layout from '../components/layout'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
