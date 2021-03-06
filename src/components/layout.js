import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import {
  container,
  heading,
  navLinkItem,
  navLinks,
  navLinkText,
  siteTitle
} from "./layout.module.scss";
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/ssr" className={navLinkText}>
              SSR
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/partner" className={navLinkText}>
              Partner
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/service" className={navLinkText}>
              Jasa
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
