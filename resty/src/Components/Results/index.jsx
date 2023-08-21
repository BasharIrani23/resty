import React from "react";

function Results(props) {
    return (
        <section id="results">
            <pre>{JSON.stringify(props.data, null, 2)}</pre>
        </section>
    );
}

export default Results;
