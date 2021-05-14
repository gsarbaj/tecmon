import React from 'react';
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout"
import { BsClock } from "@react-icons/all-files/bs/BsClock"
import { BsClockHistory } from "@react-icons/all-files/bs/BsClockHistory"
import { BsPeople } from "@react-icons/all-files/bs/BsPeople"
import SEO from "../components/SEO/SEO"
//import {BsClockHistory, BsClock, BsPeople} from "react-icons/bs/"

const RecipeTemplate = ({ data }) => {

  const {title, cookTime, content, prepTime, servings, description:{description}, image} = data.contentfulRecipe

  const pathToImage = getImage(image)

  const {tags, instructions, ingredients, tools} = content

  return (
    <Layout>

      <SEO
        title={title}
        description={description}
      />

      <main className={'page'}>
        <div className="recipe-page"></div>

        //hero

          <section className="recipe-hero">
            <GatsbyImage alt={title} image={pathToImage} className={'about-img'}/>
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                  <article>
                    <BsClock/>
                    <h5>prep time </h5>
                    <p>{prepTime} min.</p>
                  </article>

                <article>
                  <BsClockHistory/>
                  <h5>prep time </h5>
                  <p>{prepTime} min.</p>
                </article>

                <article>
                  <BsPeople/>
                  <h5>servings </h5>
                  <p>{servings} </p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags: {tags.map((tag, index) => {
                  return <Link to={`/${tag}`} key={index}>
                    {tag}
                  </Link>
              })}
              </p>
            </article>
          </section>

        //hero

        //rest of the content

        <section className="recipe-content">
          <article>
            <h4>instructions</h4>
            {
              instructions.map((item, index) => {
                return <div key={index} className={'single-instruction'}>
                  <header>
                    <p>step {index+1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              })
            }
          </article>

          <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return <p key={index} className={'single-ingredient'}>
                    {item}
                  </p>
                })}
              </div>

            <div>
              <h4>tools</h4>
              {tools.map((item, index) => {
                return <p key={index} className={'single-tool'}>
                  {item}
                </p>
              })}
            </div>

          </article>

        </section>

        //rest of the content
      </main>
    </Layout>

  );
 }

export const query = graphql`
    query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    content {
      ingredients
      instructions
      tags
      tools
    }
    description {
      description
    }
    prepTime
    servings
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
  }
}
`


export default RecipeTemplate;