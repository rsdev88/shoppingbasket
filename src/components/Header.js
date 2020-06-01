import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {AppContext} from "./AppContext"

function Header() {

    const {basketItems} = useContext(AppContext)
    const className= basketItems.length > 0 ? "fill" : "line"
    
    return (
        <header>
            <Link to="/"><h2>ShoppingBasket App</h2></Link>
            <Link to="/basket"><i className={`ri-shopping-basket-${className} ri-fw ri-2x`}></i>{basketItems.length}</Link>
        </header>
    )
}

export default Header