import React from 'react'
import path from 'path'
import hydrate from 'next-mdx-remote/hydrate'
import { getPagesPath, getPageBySlug } from '@/lib/mdx'
import MDXComponents from '@/components/MDXComponents'


const postsDirectory = path.join(process.cwd(), 'blog')

export const Article = ({ frontmatter, mdxSource }) => {
  const mdxContent = hydrate(mdxSource, { components: MDXComponents })
  return <>{mdxContent}</>
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts

  const paths = getPagesPath(postsDirectory)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { frontmatter, mdxSource} = await getPageBySlug(postsDirectory, context.params.slug)

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  }
}

export default Article
