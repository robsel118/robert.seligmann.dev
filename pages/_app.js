import React from "react";

import { ThemeProvider } from "next-themes";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import "tailwindcss/tailwind.css";
import { GlobalStyle } from '@/components/Global'
require("prismjs/themes/prism-tomorrow.css");

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <div>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
