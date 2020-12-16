import React from 'react'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import '@/styles/main.css'

require('prismjs/themes/prism-tomorrow.css')

const App = ({ Component, pageProps }) => {
  return (
    <div className="layout">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </div>
  )
}

export default App
