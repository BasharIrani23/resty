import React from "react";
import "./Results.scss";

function Results(props) {
    return (
        <section id="results">
            {props.status === "pending" ? (
                <p>Loading...</p>
            ) : (
                <pre>{JSON.stringify(props.data, null, 2)}</pre>
            )}
        </section>
    );
}

export default Results;
