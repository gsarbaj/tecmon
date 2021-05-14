import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const ContactUs = () => {
  return (
    <div className={'contactUs'}>
      <div className={'contactUs__wrapper'}>

        <StaticImage src={'../../assets/images/contact-us.png'} alt={"rasti statybininką"} width={456} placeholder='tracedSVG'/>
        <div className={'contactUs__desc'}>
          <h3 className={'contactUs__title'}>Turite klausimų? Skambinkite mums...</h3>
          <div>
            <span>+37067006363</span>
            <span>info@tecmon.lt</span>
          </div>
          <p>Duis aute n 9:00am – 6:00pm reprehenderit in voluptae eu ceptsint.</p>
        </div>
      </div>
    </div>
  );
 }


export default ContactUs;