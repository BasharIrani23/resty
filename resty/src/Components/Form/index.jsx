import React, { useState } from "react";
import "./Form.scss";

function Form(props) {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            method: method,
            url: url,
            body: body,
        };
        props.onSubmit(formData);
    };

    return (
        <form className="api-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="url">API URL:</label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="method">HTTP Method:</label>
                <select
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="body">Request Body:</label>
                {/* Conditional rendering based on the selected HTTP method */}
                {method !== "GET" && (
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                )}
            </div>
            <button type="submit">Go</button>
        </form>
    );
}

export default Form;
