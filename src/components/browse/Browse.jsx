import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext, GlobalDispatchContext } from "../../GlobalContext";

import CardList from "./CardList";
import Filter from "./Filter";
import Alert from '../Alert';
import Navbar from '../home/Navbar';

import { GlobalProvider } from "../../GlobalContext";

function Browse() {
    return (
        <div className="browse">
            <Navbar />
            <GlobalProvider>
                <Alert />
                <Filter />
                <CardList />
            </GlobalProvider>
        </div>
    );
}

export default Browse;