import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div class="nav-logo">
                <Link to="/">blackbook</Link>
            </div>
            <ul class="navlist">
                <li>
                    <Link class="link browse-link" to="/browse">Browse</Link>
                </li>
                <li>
                    <Link class="link" to="/mission">Mission</Link>
                </li>
                <li>
                    <Link class="link" to="/blog">Blog</Link>
                </li>
                <div class="register">
                    <Link id="register" to="/register"><li>Register</li></Link>
                    <p>Are you a real estate pro?</p>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;