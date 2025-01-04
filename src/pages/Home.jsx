import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>

            <main>
                <Banner></Banner>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;