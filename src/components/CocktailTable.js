import React from "react"
import {
    Link,
} from "react-router-dom";


export default function CocktailTable() {
    let cocktails = JSON.parse(localStorage.getItem('cocktails'))
    let alcoholAmount = 0
    let noAlcoholAmount = 0
    let withVodka = 0
    let withWhiskey = 0
    let withRum = 0
    cocktails.forEach(cocktail => {
        if (cocktail.type === 'alcohol') {
            alcoholAmount++
            cocktail.ingredients.forEach(ingredient => {
                if (ingredient.includes("vodka")) {
                    withVodka++
                }
                else if (ingredient.includes("whisky")) {
                    withWhiskey++
                }
                else if (ingredient.includes("rum")) {
                    withRum++
                }
            })
        } else {
            noAlcoholAmount++
        }

    })
    return (
        <div className="row">
            <div className="col-md-12 filtertable">
                <table>
                    <tr>
                        <th>Cocktails type</th>
                        <th>Amount of cocktails</th>
                    </tr>
                    <tr>
                        <td>Alcohol</td>
                        <td>{alcoholAmount}</td>
                    </tr>
                    <tr>
                        <td>No alcohol</td>
                        <td>{noAlcoholAmount}</td>
                    </tr>
                    <tr>
                        <td>With vodka</td>
                        <td>{withVodka}</td>
                    </tr>
                    <tr>
                        <td>With whisky</td>
                        <td>{withWhiskey}</td>
                    </tr>
                    <tr>
                        <td>With rum</td>
                        <td>{withRum}</td>
                    </tr>
                </table>
                <h6><Link to='/'>Go back</Link></h6>
            </div>
            
        </div>
    )
}