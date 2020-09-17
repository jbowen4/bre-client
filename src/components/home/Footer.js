import React from 'react';

function Footer() {
    return (
        <footer>
            <svg style={{ marginBottom: "-25px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#434343" fill-opacity="1" d="M0,288L34.3,261.3C68.6,235,137,181,206,181.3C274.3,181,343,235,411,245.3C480,256,549,224,617,208C685.7,192,754,192,823,202.7C891.4,213,960,235,1029,245.3C1097.1,256,1166,256,1234,213.3C1302.9,171,1371,85,1406,42.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            <div class="container">
                <p id="copyright">© 2020 Joshua Bowen, All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;