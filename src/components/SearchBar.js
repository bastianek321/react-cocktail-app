import React, { useRef } from "react"
import cocktailArray from "../data/cocktails.json"

export default function SearchBar({state, changeState = f => f}) {
    let keywordField = useRef()
    
    const cocktailFilter = () => {
        state = cocktailArray
        let keyword = keywordField.current.value.toLowerCase().replace(/\s/g)
        let result = keyword === '' ? cocktailArray : state.filter(cocktail=> cocktail.title.toLowerCase().replace(/\s/g).includes(keyword))
        changeState(result)
    }

    return (
        <div className="row searchbar">
            <input ref={keywordField} type="text" placeholder="Search..." onChange={cocktailFilter}/>
        </div>
    )
}

