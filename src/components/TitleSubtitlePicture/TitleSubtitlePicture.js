import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const TitleSubtitlePicture = () => {
  return (
    <div className={'tsp'}>
      <div className={'tsp__wrapper'}>
        <h1>A few words about us</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua maecenas accumsan lacus vel facilisis.</span>
        <StaticImage  imgClassName={'imgIndex'} src={'../../assets/images/workers.png'} alt={'workers'} placeholder='tracedSVG'/>
      </div>
    </div>
  );
 }


export default TitleSubtitlePicture;