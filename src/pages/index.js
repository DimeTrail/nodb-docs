import React from "react";
import { Redirect } from "react-router-dom";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import clsx from "clsx";
// import Link from "@docusaurus/Link";
// import Layout from "@theme/Layout";
// import styles from "./index.module.css";


export default function Home() {
  // const { siteConfig } = useDocusaurusContext();
  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     description="Description will go into a meta tag in <head />">
  //     <main>
  //        // Add features here.
  //     </main>
  //   </Layout>
  // );
  return <Redirect to="/docs/intro" />;
}
