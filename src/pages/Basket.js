import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import BasketItem from "../components/BasketItem"
import {AppContext} from "../components/AppContext"

function Basket() {

    const [buttonText, setButtonText] = useState("Place Order")
    const [messageText, setMessageText] = useState("Your basket is empty.")
    const {basketItems, removeAllItemsFromBaskets} = useContext(AppContext)

    const basketItemElements = basketItems.map(item => 
        <BasketItem key={item.id} item={item} />
    )

    let totalCost = (basketItems.length * 5.99).toLocaleString("en-GB", {style: "currency", currency: "GBP"})

    const buttonElement = basketItems.length > 0 ? 
        <div className="order-button">
            <button onClick={() => handleClick()}>{buttonText}</button>
        </div>
        :
        <div className="order-message">
            <p>{messageText}</p>
            <p>Go back <Link to="/">home</Link> to add more items.</p>
        </div>

    function handleClick(){
        setButtonText("Ordering...")

        setTimeout(() => {
            removeAllItemsFromBaskets()
            setButtonText("Place Order")
            setMessageText("Order placed!")
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {basketItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            {buttonElement}
        </main>
    )
}

export default Basket