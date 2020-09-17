import React, { useState } from 'react';
const avatar = require('./default.jpg');

function Card(props) {

    const { name,
        contact_email,
        contact_number,
        website,
        company,
        job_type,
        description,
        address1,
        address2,
        city,
        state,
        zipcode,
        photo
    } = props.pro;

    const [expanded, toggle] = useState(false);

    const addDefaultSrc = (e) => {
        e.target.src = avatar;
        e.target.onerror = null;
    }

    const redirect = () => {
        if (website.includes('http://') || website.includes('https://')) {
            window.open(website);
        } else {
            window.open(`//${website}`);
        }
    }

    return (
        <React.Fragment>
            <div className="card" onClick={() => toggle(!expanded)}>
                <div className="icon">
                    <img id="icon-img" src={photo} onError={addDefaultSrc} />
                </div>
                <div className="wordbox">
                    <h1>{name}</h1>
                    <h3 className="type-header" id="hidden-type">{job_type}</h3>
                    <h3>{address1}, {city}, {state} {zipcode}</h3>
                </div>
                <div className="type">
                    <h4 className="type-header">{job_type}</h4>
                </div>
                <hr style={expanded ? { display: 'block' } : { display: 'none' }} class="line horizontal" />
                <div class={expanded === true ? 'expanded' : 'hidden-card'}>
                    <div class="description">
                        {description !== 'undefined' ? description : `${name} didn't write a description`}
                    </div>
                    <hr class="line vertical" />
                    <div class="contact-items">
                        <span class="contact">{contact_number}</span>
                        <a class="contact" href={`mailto: ${contact_email}`}>{contact_email}</a>
                        {website ? <a class="contact" onClick={redirect}>{website}</a> : null}
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Card;
