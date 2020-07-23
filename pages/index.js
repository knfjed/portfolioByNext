import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => (
  <Layout title="HOME">
    <div>hello Next</div>
    <Link href="/about">
      <a>Go to About</a>
    </Link>
  </Layout>
);

export default Index;
