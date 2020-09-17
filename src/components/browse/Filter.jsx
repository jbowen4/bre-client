import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext, GlobalDispatchContext } from "../../GlobalContext";
import { Link } from 'react-router-dom';

function Filter(props) {
    const types = ['all', 'realtor', 'loan manager', 'lawyer', 'inspector', 'title company'];

    const filterDetails = useContext(GlobalContext);
    const setFilterDetails = useContext(GlobalDispatchContext);

    function setType(type) {
        setFilterDetails({ ...filterDetails, type: type })
    }

    // handleKeyPress = (event) => {
    //     if (event.key === 'Enter') {
    //         console.log('enter press here! ')
    //     }
    // }

    return (
        <Fragment>
            <div className="head">
                {/* <Link to="/"><img className="logo" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" /></Link> */}
                <div className="filterbox">
                    <div className="dropdown">
                        <button className="type-button" type="button" name="button">{filterDetails.type}</button>
                        <div id="myDropdown" className="dropdown-content">
                            {types.map(type => (
                                <a class="drop-option" onClick={() => setType(type)}>{type}</a>
                            ))}
                        </div>
                    </div>
                    <div className="searchbox">
                        <input className="search" type="search" value={filterDetails.searchText} onChange={(e) => setFilterDetails({ ...filterDetails, searchText: e.target.value })} placeholder="Search zipcode" />
                        <button onClick={() => setFilterDetails({ ...filterDetails, loading: !filterDetails.loading })} className="search-button" type="button" name="button"><i class="fas fa-search-location"></i></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Filter;

