import React, {useState, useContext} from "react"
import PropTypes, { string } from "prop-types"
import {AppContext} from "./AppContext"
import useHook from "../hooks/useHover"

function Image({className, image}) {
    
    const {basketItems, toggleFavourite, addItemToBasket, removeItemFromBasket} = useContext(AppContext) 
    const [isHovered, ref] = useHook()
    
    function heartIcon(){
        if(image.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavourite(image.id)}></i>
        }

        return isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavourite(image.id)}></i>
    }

    function basketIcon(){

        if(basketItems.some(item => item.id === image.id)){
            console.log(image)
            return <i className="ri-shopping-basket-fill cart" onClick={() => removeItemFromBasket(image)}></i>
        }

        return isHovered && <i className="ri-add-circle-line cart" onClick={() => addItemToBasket(image)}></i>
    }

    return (
        <div className={`${className} image-container`}
                ref={ref}>
            {heartIcon()}
            <img  
                src={image.url} 
                className="image-grid">

            </img> 
            {basketIcon()}            
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image