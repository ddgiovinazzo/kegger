import React, { useState, useEffect } from "react";
import NavSearchIndex from './nav_search_index'
import { Link } from 'react-router-dom'

const NavSearch = (props) => {
    const {location:{pathname}} = props
    if (pathname === "/beers") return null 
    
    const {beers, searchText, setSearchText} = props

    const handleSearch = (e) => {
        setSearchText(e.currentTarget.value)
    }

    return (

            <div onMouseDown={(e)=>e.stopPropagation()} id='search-bar-container' >
                <div>

                    <input onChange={handleSearch} id="search-bar" placeholder="Find a beer..." type="text" />
                    <i className="fas fa-search fa-med search-icon"></i>
                </div>

                {searchText ? <NavSearchIndex searchText={searchText} setSearchText={setSearchText} beers={beers} /> : null}
            </div>

    )

}

export default NavSearch
