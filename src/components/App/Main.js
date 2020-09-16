import React, { useEffect, useState } from 'react'
import { Image } from './Image';
import { Results } from './Results';
import { File } from './File';
import bird from '../../resources/bird.png'

import './main.css'
import { imageRecognition } from '../../helpers/imageRecognition';

export const Main = () => {
    const [dataImage, setDataImage] = useState(bird)
    const [results, setResults] = useState([])
    const [initialMessage, setInitialMessage] = useState(true);

    useEffect(() => {
        imageRecognition(document.getElementById('image'))
            .then((results) => {
                setResults(results);
            })
    }, [])
    return (
        <div className="App">
            <h1>Image classification with ML5.js</h1>
            <hr />
            <div className="row ">
                <div className="col-5">
                    <Image dataImage={dataImage}  />
                </div>
                <div className="col">
                    <File
                        setDataImage={setDataImage}
                        setInitialMessage={setInitialMessage}
                        setResults={setResults} />
                    <Results
                        results={results}
                        setInitialMessage={setInitialMessage}
                        initialMessage={initialMessage} />
                </div>
            </div>
        </div>
    )
}
