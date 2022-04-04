import { Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";

const ParnterList = ({ serverData }) => (
  <Layout pageTitle="Partner MEA">
    {serverData.map((node) => (
      <article key={node.course_id}>
        <h2>
          <Link to={`/partner/${node.partner_id}`}>
            {node.title} ({node.price})
          </Link>
        </h2>
      </article>
    ))}
  </Layout>
);
export default ParnterList;

export async function getServerData() {
  try {
    const res = await fetch(
      "https://staging.komunitasmea.com/api/courses/all"
    );
    const response = await res.json();
    const partner = response.data.filter((item) => item.partner_id);
    return {
      props: partner,
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
