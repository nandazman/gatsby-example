import parse from "html-react-parser";
import * as React from "react";
import Layout from "../../components/layout";

const ServicePage = ({ serverData }) => {
  console.log({ serverData });
  return (
    <Layout pageTitle={serverData.name}>
      {(serverData.service_products || []).map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <div>{parse(item.description)}</div>
        </article>
      ))}
    </Layout>
  );
};

export default ServicePage;

export async function getServerData(context) {
  try {
    const res = await fetch(
      `https://staging.komunitasmea.com/api/service/${context.params.id}`
    );
    const response = await res.json();
    return {
      props: response.data || {},
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
