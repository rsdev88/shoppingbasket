import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {AppContext} from "./AppContext"

function Header() {

    const {basketItems, photos, addItemToBasket} = useContext(AppContext)
    const className= basketItems.length > 0 ? "fill" : "line"

    const shouldDisplayAddFavouritesButton = photos.some(photo => photo.isFavorite === true)

    function handleClick(){
        //Add favourites to the basket if they're not already included.
        photos.forEach(photo => {
            if(photo.isFavorite && basketItems.some(basketItem => basketItem.id === photo.id) === false){
                addItemToBasket(photo)
            }
        })
    }

    return (
        <header>
            <div className="header-content_left">
                <Link to="/"><h2>ShoppingBasket App</h2></Link>
            </div>
            <div className="header-content_right">
                {
                    shouldDisplayAddFavouritesButton &&
                    <button 
                        className="header-button-addfavourites"
                        onClick={() => handleClick()}>
                            Add favourites to basket
                    </button>
                }
                
                <Link to="/basket"><i className={`header-link-basket ri-shopping-basket-${className} ri-fw ri-2x`}></i>{basketItems.length}</Link>
            </div>
        </header>
    )
}

export default Header