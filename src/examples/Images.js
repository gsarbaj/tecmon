import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const Images = props => {
  return (
   <div>
    <h2>Gatsby Image</h2>
     <StaticImage
       src={'../assets/images/big.jpg'}
       alt={'Test'}
       width={800}
       // placeholder='tracedSVG'
       placeholder={'blurred'}
     />
     {/*<img src={big} alt="Big" />*/}
   </div>
  );
 }


export default Images;