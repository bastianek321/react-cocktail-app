import React from "react"
import {
    Link
} from "react-router-dom";

export default function CocktailBasic({ cocktailData }) {


    return (
        <div className="row cocktail">
            <div className="col">
                <img src={cocktailData.image} alt='Obrazek' style={{ width: 300, height: 300 }} />
            </div>
            <div className="col">
                <h3>Name: {cocktailData.title}</h3>
                <h4>Type: {(cocktailData.type).charAt(0).toUpperCase() + (cocktailData.type).slice(1)}</h4>
                <h6><Link to={`/${cocktailData.id}`}>Details</Link></h6>
            </div>
        </div>
    )
}