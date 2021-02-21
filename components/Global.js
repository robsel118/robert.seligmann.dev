import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400&family=Inter:400');

    html {font-size: 100%;} /*16px*/

    :root {
        --text-sm: 0.8rem;
        --text-base: 1rem;
        --text-lg: 1.25rem;
        --text-xl: 1.563rem;
        --text-2xl: 1.953rem;
        --text-3xl: 2.441rem;
        --text-4xl: 3.052rem;

        --font-serif: 'Roboto Slab', serif;
        --font-mono: 'Inter', sans-serif;
    }

    [data-theme="dark"]{
    }

    body {
        font-family: var(--font-mono);
        font-weight: 400;
        line-height: 1.75;
    }

    p {margin-bottom: 1rem;}
    h1, h2, h3, h4, h5 {
        margin: 3rem 0 1.38rem;
        font-family: var(--font-serif);
        font-weight: 400;
        line-height: 1.3;
    }

    h1 {
        margin-top: 0;
        font-size: var(--text-4xl);
    }

    h2 {font-size: var(--text-3xl);}

    h3 {font-size: var(--text-2xl);}

    h4 {font-size: var(--text-xl);}

    h5 {font-size: var(--text-lg);}

    small, .text_small {font-size: var(--text-sm);}
`
