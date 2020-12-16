import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import remarkConfig from '@/config/remark'
import MDXComponents from '@/components/MDXComponents'


export const getPagesPath = (pagesDirectory) => {
  const fileNames = fs.readdirSync(pagesDirectory)

  return fileNames.map((file) => ({
    params: { slug: file.replace(/\.mdx$/, '') },
  }))
}

export const getPageBySlug = async (pagesDirectory, slug) => {
  const fullPath = path.join(pagesDirectory, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(file)
  
  const mdxSource = await renderToString(content, {
    MDXComponents,
    mdxOptions: {
      remarkPlugins: remarkConfig,
    },
  });

  return { frontmatter: { ...data }, mdxSource }

}
