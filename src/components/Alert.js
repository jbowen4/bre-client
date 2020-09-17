import React, { Fragment, useContext, useEffect } from 'react';
import { GlobalContext, GlobalDispatchContext } from "../GlobalContext";
import { Link } from 'react-router-dom';

function Alert(props) {

    const filterDetails = useContext(GlobalContext);
    const setFilterDetails = useContext(GlobalDispatchContext);

    const geoFindMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert("You're browser does not support geolocation. We cannot get your current location. Please instead type your zipcode in the search box.")
        }
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setFilterDetails({ ...filterDetails, lat: latitude, lng: longitude });
    }

    const error = (error) => {
        console.log(`Unable to retrieve your location due to ${error.code}: ${error.message}`);
    }

    useEffect(() => {
        geoFindMe();
    }, []);

    return (
        <Fragment>
        </Fragment>
    );
}

export default Alert;

