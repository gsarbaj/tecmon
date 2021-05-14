import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
     query {
        site {
          siteMetadata {
            author
            description
            simpleData
            title
            complexData {
              age
              name
            }
            person {
              age
              name
            }
          }
        }
      }
      `

const FetchData = props => {

  const {site:{siteMetadata:{title}}} = useStaticQuery(getData)


  return (
   <div>
    {/*<h1>Name: {data.site.siteMetadata.person.name}</h1>*/}
     <h2>Site title is: {title}</h2>
   </div>
  );
 }


export default FetchData;