import React from "react";
import hydrate from "next-mdx-remote/hydrate";
import styles from "./intro.module.scss";

const MDXComponents = {
  h1: props => <h1 className={styles.greeting} {...props} />
}

const Intro = ({ intro }) => {
  const { _, mdxSource } = intro;


  const mdxContent = hydrate(mdxSource, { components: MDXComponents });

  return <>{mdxContent}</>;
};

export default Intro;
