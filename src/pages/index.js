import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>{`Dragon Prevost`}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

/*
export const query = graphql`
  query{
    github {
      viewer {
        name
        repositories(last: 5) {
          nodes {
            name
            description
            url
          }
        }
      } 
    }
  }
`
*/
export default IndexPage 
