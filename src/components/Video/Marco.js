import React from 'react'

export const Marco = ({ y, x, width, height, label }) => {
    return (
        <>
            <div
                className="marco"
                id="marco"
                style={{
                    position: 'absolute',
                    top: `${y}%`,
                    left: `${x}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                    content: `${label}%`,
                }}
            />
            <div
                className="tag"
                style={{
                    position: 'absolute',
                    top: `${y}%`,
                    left: `${x}%`,
                }}
            >
                <h5>{label}</h5>
            </div>
        </>
    )
}
