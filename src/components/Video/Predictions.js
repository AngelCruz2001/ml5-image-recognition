import React from 'react'

export const Predictions = ({ label, confidence }) => {
    return (
        <>
            {label !== "" ?
                <div className="alert alert-success mt-3 animate__animated animate__backInRight " role="alert">
                    <p>Label: {label} </p>
                    <p>Confidence: {confidence} </p>
                </div>

                :
                <blockquote className="blockquote">
                    <footer className="blockquote-footer mt-4" style={{ fontSize: 30 }}>To start with the searching please click "Analyze" </footer>
                </blockquote>
            }
        </>
    )
}
