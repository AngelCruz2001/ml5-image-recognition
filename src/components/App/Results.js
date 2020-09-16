import React from 'react'

export const Results = ({ results, setInitialMessage, initialMessage }) => {
    console.log("asdf: ", results)
    const typesProgress = ['info', 'warning', 'danger'];
    return (
        <div >
            { (!initialMessage) ?
                <>
                    {(results.length > 0) ?
                        <div className="mt-3">
                            {results.map(({ label, confidence }, i) => (
                                <div key={confidence} className="animate__animated animate__rubberBand">
                                    <p className="h3">{label}</p>
                                    <div className="progress">
                                        <div className={`progress-bar progress-bar-striped bg-${typesProgress[i]}`}
                                            role="progressbar"
                                            style={{ width: `${(confidence) * 100}%` }}
                                        >
                                        </div>
                                    </div>
                                    <p className="h2 text-center">{(confidence * 100).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        :
                        <div className="text-center">
                            <div className="spinner-border m-5" role="status" />
                        </div>
                    }
                </>
                :
                <blockquote className="blockquote">
                    <footer className="blockquote-footer mt-4" style={{ fontSize: 30 }}>To start with the searching please click "Analyze" </footer>
                </blockquote>
            }
        </div>
    )
}
