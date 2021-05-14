import React from 'react';
import Layout from "../components/Layout/Layout"
import Images from "../examples/Images"
import FetchData from "../examples/fetchData"
import AllRecipes from "../components/AllRecipes/AllRecipes"
import SEO from "../components/SEO/SEO"

const Home = props => {
  return (
   <Layout>
     <SEO
        title={'Home'}
        description={'This is Home page'}
     />
     <AllRecipes/>
      Home Page
     <FetchData/>
     <Images/>
   </Layout>
  );
 }


export default Home;
