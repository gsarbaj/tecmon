import React from 'react';
import setupTags from "../../utils/setupTags"
import { Link } from "gatsby"

const TagList = ({recipes}) => {
  const newTags = setupTags(recipes)
  return (
   <div className={'tags-container'}>
    <h4>recipes</h4>
     <div className="tags-list">
       {newTags.map((tag, index) => {
         const [text, value] = tag
         return <Link key={index} to={`/${text}`}>{text} ({value})</Link>
       })}
     </div>
   </div>
  );
 }


export default TagList;