import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './home/Navbar';

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <div class="main blog">
                <h1>No blog<br /> posts yet.</h1>
            </div>
        </Fragment>
    )
};

export default Home;