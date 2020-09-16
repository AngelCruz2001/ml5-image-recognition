import React, { useState } from 'react'
import { imageRecognition } from '../../helpers/imageRecognition'

export const File = ({ setDataImage, setInitialMessage, setResults }) => {
    const [labelFile, setLabelFile] = useState("Bird.png")

    const handleChange = ({ target }) => {
        const image = target.files[0]
        if (image) {
            setLabelFile(image.name);
            let readear = new FileReader()
            readear.onload = (({ target }) => {
                setDataImage(target.result)
            })
            readear.readAsDataURL(image)
        }
        setInitialMessage(true)

    }

    const handleClick = () => {
        setResults([])
        setInitialMessage(false)
        imageRecognition(document.getElementById('image'))
            .then((results) => {
                setResults(results)
            })
    }

    return (
        <div>
            <div className="input-group">
                <div className="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        onChange={handleChange}
                        security="true"
                    />
                    <label
                        className="custom-file-label"
                        htmlFor="inputGroupFile04"
                    >
                        {labelFile}
                    </label>
                </div>
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="inputGroupFileAddon04"
                        onClick={handleClick}
                    >
                        Analyze
                    </button>
                </div>
            </div>
        </div>
    )
}
