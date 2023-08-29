import React from "react";
import JSONPretty from "react-json-pretty"; // Import the JSONPretty component
import "./Results.scss";

function Results(props) {
    const { loading, history } = props.data;
    const { results } = history[props.selectedHistoryIndex] || {};
    return (
        <section id="results">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {/* Render history */}
                    <div className="history">
                        {history.map((result, index) => (
                            <button
                                key={index}
                                onClick={() => props.onHistoryItemClick(index)}
                            >
                                API Call {index + 1}
                            </button>
                        ))}
                    </div>
                    {/* Render selected history item's results */}
                    {results !== undefined && (
                        <div className="response">
                            <h2>Response Results:</h2>
                            <JSONPretty json={results} />
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}

export default Results;
