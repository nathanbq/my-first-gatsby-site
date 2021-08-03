// Step 1: import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

//Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt=" Doctor Strange as the Supreme Surgeon"
        src="../images/clean.jpg"
      />
    </Layout>
  );
};

//Step 3: Export your Component
export default IndexPage;
