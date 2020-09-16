import React from 'react'

export const Image = ({ dataImage }) => {
    console.log(dataImage)
    return (
        <img
            src={dataImage}
            id="image"
            className="img-thumbnail animate__animated animate__backInLeft"
            width="400"
            alt=""
        >

        </img>
    )
}
