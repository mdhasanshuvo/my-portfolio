import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div id='home'>
            <header className='sticky top-0 z-50'>
                <Nav></Nav>
            </header>

            <main>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Achievements></Achievements>
                <Contact></Contact>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;