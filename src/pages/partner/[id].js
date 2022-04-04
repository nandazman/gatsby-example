import * as React from "react";
import Layout from "../../components/layout";

const PartnerPage = ({ serverData }) => {
  return (
    <Layout pageTitle={serverData.title}>
      <h2>{serverData.price}</h2>
      <img alt={serverData.title} src={serverData.image} />
      {serverData.instructors.map((item) => (
        <article key={item.instructor_id}>
          <h2>{item.name}</h2>
          <p>{item.biography}</p>
        </article>
      ))}
    </Layout>
  );
}

export default PartnerPage;

export async function getServerData(context) {
  try {
    const res = await fetch(
      `https://staging.komunitasmea.com/api/courses/all?partner_id=${context.params.id}`
    );
    const response = await res.json();
    return {
      props: response.data[0] || {},
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}