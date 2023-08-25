import React, { useState } from "react";
import "./Form.scss";

function Form(props) {
    const [method, setMethod] = useState("GET"); // State for the selected method
    const [url, setUrl] = useState(""); // State for the input URL

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            method: method,
            url: url,
        };
        props.handleApiCall(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>URL: </span>
                    {/* Input field for URL */}
                    <input
                        name="url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    {/* HTTP methods */}
                    <span id="get" onClick={() => setMethod("GET")}>
                        GET
                    </span>
                    <span id="post" onClick={() => setMethod("POST")}>
                        POST
                    </span>
                    <span id="put" onClick={() => setMethod("PUT")}>
                        PUT
                    </span>
                    <span id="delete" onClick={() => setMethod("DELETE")}>
                        DELETE
                    </span>
                </label>
            </form>
        </>
    );
}

export default Form;
