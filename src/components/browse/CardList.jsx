import React, { Fragment, useEffect, useState, useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../../GlobalContext";
import Loading from '../Loading';
import axios from 'axios';

function CardList(props) {

    const filterDetails = useContext(GlobalContext);
    const { searchText, type, lat, lng, loading } = filterDetails;

    const [pros, setPros] = useState([]);

    const isZipcode = (input) => {
        input = input.trim();
        if (input.length === 5 && !isNaN(input)) {
            return parseInt(input);
        } else {
            return undefined;
        }
    }

    const getPros = async () => {
        try {
            let response = await axios.get("http://localhost:4000/api/pros/nearby", {
                params: {
                    lat: lat,
                    lng: lng,
                    zipcode: isZipcode(searchText)
                }
            });
            console.log(response);
            const jsonData = await response.data;
            const filteredPros = jsonData.filter(pro => pro.job_type.toLowerCase() === type || type === "all");
            setPros(filteredPros);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPros();
    }, [lat, lng, type, loading]);

    return (
        <Fragment>
            {pros === [] ? <Loading /> : pros.map(pro => (<Card key={pro.id} pro={pro} />))}
            <div style={{ marginBottom: '30px' }} />
        </Fragment>
    )
}

export default CardList;
