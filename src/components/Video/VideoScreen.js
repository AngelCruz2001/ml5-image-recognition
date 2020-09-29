import { Proccess } from './Proccess';
import React, { useState } from 'react'
import Webcam from "react-webcam";
import { getModel } from '../../helpers/video/getModel';
import { getVideoResult } from '../../helpers/video/getVideoResult';
import { Marco } from './Marco';
import { Predictions } from './Predictions';
import './videoScreen.css';

export const VideoScreen = () => {
    const [run, setRun] = useState(false);
    const [results, setResults] = useState([{ label: "", confidence: "", x: "", y: "", width: "", height: "" }])


    const proccesObjectDetector = async () => {
        const video = document.getElementById('video');
        const model = await getModel(video);
        startDetection(model, video);
    }

    const startDetection = (model, video) => {
        setTimeout(() => {
            getVideoResult(model, video)
                .then((results) => {
                    setResults(results);
                })
            startDetection(model, video)
        }, 1500);
    }

    const handleClickPlay = () => {
        setRun(true)
        console.log(run)
        proccesObjectDetector();
    }
    const handleClickStop = () => {
        setRun(false)
        console.log(run)
    }


    return (
        <div>
            <h1>Video Recognition <span className="badge badge-secondary">ML5</span></h1>

            <div className="row">
                <div className="col-6">
                    <div>
                    
                        {results.map(({ x, y, width, height, label }, i) => (
                            <Marco
                                key={i}
                                x={x}
                                y={y}
                                width={width}
                                height={height}
                                label={label}
                                i={i}
                            />
                        ))}

                        <Webcam
                            id="video"
                            height="100%"
                            width="100%"
                        />
                    </div>

                </div>
                <div className="col">
                    <button
                        type="button"
                        class="btn btn-primary btn-lg"
                        onClick={handleClickPlay}
                    >
                        Start
                    </button>

                    {results.map(({ label, confidence }, i) => (
                        <Predictions
                            key={i}
                            confidence={confidence}
                            label={label}
                        />
                    ))}

                </div>
            </div>
        </div>
    )
}
