import React from 'react';
import Banner from '../../components/Banner';
import aboutBackground from '../../assets/about-banner.webp';

function About() {
    return (
        <div className="about">
            <Banner 
                backgroundImage={aboutBackground}
                isAbout={true}
            />
        </div>
    )
}

export default About