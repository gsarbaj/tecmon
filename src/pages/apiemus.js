import React from 'react';
import Layout from "../components/Layout/Layout"
import TitleSubtitlePicture from "../components/TitleSubtitlePicture/TitleSubtitlePicture"
import SimpleText from "../components/SimpleText/SimpleText"
import ContactUs from "../components/ContactUs/ContactUs"
import AllRecipes from "../components/AllRecipes/AllRecipes"
import SEO from "../components/SEO/SEO"

const ApieMus = props => {
  return (
    <Layout>
      <SEO
        title={'About'}
        description={'This is About Page'}
      />
      <main>
        <AllRecipes/>
        <TitleSubtitlePicture

        />
        <SimpleText

        />
        <ContactUs

        />
      </main>
    </Layout>
  );
 }


export default ApieMus;