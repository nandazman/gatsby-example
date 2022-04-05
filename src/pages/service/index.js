import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

const ParnterList = ({ serverData }) => (
  <Layout pageTitle="Jasa MEA">
    {serverData.map((node) => (
      <article key={node.id}>
        <h2>
          <Link to={`/service/${node.id}`}>{node.name}</Link>
        </h2>
      </article>
    ))}
  </Layout>
);
export default ParnterList;

export async function getServerData() {
  try {
    const res = await fetch("https://staging.komunitasmea.com/api/service");
    const response = await res.json();
    return {
      props: response.data,
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
