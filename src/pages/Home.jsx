import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>

            <main>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;