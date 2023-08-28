import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import axios from "axios";
import "./App.scss";

function App() {
    const [requestData, setRequestData] = useState({
        method: "GET",
        url: "",
        body: "",
    });
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        if (requestData.url) {
            fetchData();
        }
    }, [requestData]);

    const fetchData = async () => {
        try {
            const response = await axios({
                method: requestData.method,
                url: requestData.url,
                data: requestData.body,
            });
            setResponseData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFormSubmit = (formData) => {
        setRequestData(formData);
    };

    return (
        <div className="app">
            <Header />
            <main>
                <Form onSubmit={handleFormSubmit} />
                <Results data={responseData} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
