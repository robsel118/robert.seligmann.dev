import Head from "next/head";
import { getPageBySlug, getPagesPath } from "@/lib/mdx";
import { useTheme } from 'next-themes'

export default function Home({intro, about, featured, projects}) {
  const { setTheme } = useTheme()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p onClick={()=> {setTheme('dark')}}>Switch to dark</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const projectPaths = getPagesPath("portfolio/projects");

  const intro = await getPageBySlug("portfolio", "intro");
  const about = await getPageBySlug("portfolio", "about");
  const allProjects = await Promise.all(
    projectPaths.map((projectPath) =>
      getPageBySlug("portfolio/projects", projectPath.params.slug)
    )
  );
  
  const [featured, projects] = allProjects.reduce((acc, project)=> {
    if(project.featured){
      return [[...acc[0], project], [...acc[1]]]
    }
    return [[...acc[0]], [...acc[1], project]]
  },[[],[]])
  
  return {
    props: {
      intro,
      about,
      featured,
      projects
    }, // will be passed to the page component as props
  };
}
