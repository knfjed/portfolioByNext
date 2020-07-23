import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const About = () => (
  <Layout title="ABOUT ME">
    <Link href="/">
      <a>back to home</a>
    </Link>
    <img src="/static/nextJs.svg" alt="Next.js" width="200px" />
  </Layout>
);

export default About;
