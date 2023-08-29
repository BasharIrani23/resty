import React from "react";
import JSONPretty from "react-json-pretty";
import "./Results.scss";

function Results(props) {
    return (
        <section id="results">
            {props.data ? (
                <div className="response">
                    <h2>Response Headers:</h2>
                    <JSONPretty data={props.data.headers} />
                    {props.data.results !== null && (
                        <div>
                            <h2>Response Results:</h2>
                            <JSONPretty data={props.data.results} />
                        </div>
                    )}
                </div>
            ) : (
                <p>No response data yet.</p>
            )}
        </section>
    );
}

export default Results;
