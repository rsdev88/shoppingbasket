import React, {useContext} from "react"
import {AppContext} from "../components/AppContext"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {

    const {photos} = useContext(AppContext)
    const images = photos.map((photo, index) => (
        <Image key={photo.id} image={photo} className={getClass(index)} />
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos