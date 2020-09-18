import React, { useEffect, useState } from 'react'
import { getModel } from '../helpers/video/getModel'

export const useML5 = ({ video }) => {
    const [results, setResults] = useState({ data: {}, loading: true, error: false })


    useEffect(() => {
        getModel(video)
            .then((results) => {
                const { label, confidence, x, y, width, height } = results[0]
                setResults({
                    data: {
                        label: label,
                        confidence: confidence,
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    },
                    loading: false,
                    error: false,
                });
                // changeCSS(x, y, width, height, label);
            })
            .catch((err) => {
                console.log(err)
                setResults({...results, error: true});
            })
    }, [video])

    return results
}
