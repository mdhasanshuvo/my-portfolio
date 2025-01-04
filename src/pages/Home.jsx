import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';

const Home = () => {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>

            <main>
                <Banner></Banner>
                <AboutMe></AboutMe>
                {/* <Skills></Skills> */}
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;