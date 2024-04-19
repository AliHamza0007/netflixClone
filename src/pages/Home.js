import React from "react";
import Vedio from "../components/home/Vedio";
import Download from "../components/Download";
import FAQ from "../components/home/FAQ";
import Layout from "../components/Layout";
const Home = () => {
  return (
    <Layout>
      <Vedio />
      <Download />
      <FAQ />
    </Layout>
  );
};

export default Home;
