import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Details from './Details';
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Hero />
            <Details />
            <Footer />
        </Fragment>
    )
};

export default Home;