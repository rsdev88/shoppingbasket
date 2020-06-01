import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {AppContext} from "./AppContext"
import useHover from "../hooks/useHover"

function BasketItem({item}) {

    const [isHovered, ref] = useHover()
    const {removeItemFromBasket} = useContext(AppContext)

    const binClassName = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
        <i 
            className={binClassName} 
            onClick={() => removeItemFromBasket(item)}
            ref= {ref}>
        </i>
        <img src={item.url} width="130px" />
        <p>£5.99</p>
    </div>
    )
}

BasketItem.propTypes ={
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default BasketItem