import React from 'react';
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const Error = props => {
  return (
    <Layout>
      <SEO
        title={'Error'}
      />
      Error Page
    </Layout>
  );
 }


export default Error;