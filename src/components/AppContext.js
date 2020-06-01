import React, {useState, useEffect} from "react"

const AppContext = React.createContext()

function AppProvider(props){

    const [photos, setPhotos] = useState(JSON.parse(localStorage.getItem('photos')) || [])
    const [basketItems, setBasketItems] = useState(JSON.parse(localStorage.getItem('basketItems')) || [])

    useEffect(() => {

        if (photos.length == 0)
        {
            fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(json => (setPhotos(json)))
            .catch(error => (console.log(`There was an error retrieving photos: ${error}`)))
        }

    }, [])

    useEffect(() => {
            localStorage.setItem('photos', JSON.stringify(photos))
    }, [photos])

    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basketItems))
    }, [basketItems])

    function toggleFavourite(id){
        const newPhotosArray = photos.map(photo => {
            if(photo.id === id){
                console.log(photo)
                let newPhoto = {...photo, isFavorite: !photo.isFavorite }
                console.log(newPhoto)
                return newPhoto
            }
            return photo
        })

        setPhotos(newPhotosArray)
    }

    function addItemToBasket(item){
        setBasketItems(prevBasketItems => ([...prevBasketItems, item]))
    }

    function removeItemFromBasket(itemToRemove){
        const newBasketArray =  basketItems.filter(item => item.id !== itemToRemove.id)
        setBasketItems(newBasketArray)
    }

    function removeAllItemsFromBaskets(){
        setBasketItems([])
    }

    return(
        <AppContext.Provider value={{photos, basketItems, toggleFavourite, addItemToBasket, removeItemFromBasket, removeAllItemsFromBaskets}}>
            {props.children}       
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider} 