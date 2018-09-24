import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hello people</h1>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomePage.introduction }} />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query HomeQuery {
    datoCmsHomePage {
      introduction
    }
  }
`;

export default IndexPage
