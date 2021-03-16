import React from "react"
import {
    Link,
    useParams
} from "react-router-dom";

export default function CocktailDetails() {
    let cocktails = JSON.parse(localStorage.getItem('cocktails'))
    let {cocktailId} = useParams();
    let cocktailData = cocktails.find(cocktail => cocktail.id === parseInt(cocktailId));

    return (
        <div className="row">
            <div className="col">
                <img src={cocktailData.image} alt='Obrazek' style={{ width: 600, height: 600 }} />
            </div>
            <div className="col">
                <h3>Name: {cocktailData.title}</h3>
                <h4 style={{display: "inline"}}>Type: </h4><h5 style={{display: "inline"}}>{(cocktailData.type).charAt(0).toUpperCase() + (cocktailData.type).slice(1)}</h5>
                <br/>
                <h4 style={{display: "inline"}}>Glass type: </h4><h5 style={{display: "inline"}}>{cocktailData.glass}</h5>
                
                <h4>Ingredients:</h4>
                <ul>
                    {
                        cocktailData.ingredients.map((ingredient, i) => {
                            return (
                                <li key={i}>
                                    {ingredient}
                                </li>
                            )
                        })
                    }
                </ul>
                <h4>Instructions:</h4>
                <ol>
                    {
                        cocktailData.instructions.map((instruction, i) => {
                            return (
                                <li key={i}>
                                    {instruction}
                                </li>
                            )
                        })
                    }
                </ol>
                <h6><Link to='/'>Go back</Link></h6>
            </div>
        </div>
    )
}