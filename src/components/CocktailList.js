import React, { useState } from "react"
import CocktailBasic from "../components/CocktailBasic"
import SearchBar from "./SearchBar"


export default function CocktailList({ cocktailArray }) {
    const [cocktails, setCocktails] = useState(cocktailArray)

    return (
        <div className="row">
            <div className="col">
                <SearchBar state={cocktails} changeState={setCocktails} />
                <div className="row cocktails">
                    {
                        cocktails.map((cocktailData, i) => {
                            return (
                                <div key={i} className="col-md-4">
                                    <div className="singlecocktail">
                                        <CocktailBasic cocktailData={cocktailData} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}