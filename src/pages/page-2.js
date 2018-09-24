import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'


import Layout from '../components/layout'

const SecondPage = ({ data }) => (
  <Layout>
    <h1>Hi from the second page</h1>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsAboutPage.aboutUs }} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query AboutQuery {
    datoCmsAboutPage {
      aboutUs
    }
  }
`;

export default SecondPage
