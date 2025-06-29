import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../projects/projects';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            
        </div>
    );
};

export default Home;