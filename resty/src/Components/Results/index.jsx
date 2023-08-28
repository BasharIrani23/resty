import React from "react";
import JSONPretty from "react-json-pretty"; // Assuming you use a third-party component to pretty print JSON
import "./Results.scss";

function Results(props) {
    return (
        <section id="results">
            {props.data ? (
                <div className="response">
                    <h2>Response Headers:</h2>
                    <JSONPretty data={props.data.headers} />
                    <h2>Response Body:</h2>
                    <JSONPretty data={props.data.body} />
                </div>
            ) : (
                <p>No response data yet.</p>
            )}
        </section>
    );
}

export default Results;
