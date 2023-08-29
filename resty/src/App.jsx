import React, { useState, useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import axios from "axios";
import "./App.scss";

const initialState = {
    loading: false,
    results: null,
    history: [], // Initialize an empty history array
};

const reducer = (state, action) => {
    switch (action.type) {
        case "REQUEST_START":
            return { ...state, loading: true };
        case "REQUEST_SUCCESS":
            return {
                ...state,
                loading: false,
                results: action.payload,
                history: [...state.history, action.payload],
            };
        case "REQUEST_ERROR":
            return { ...state, loading: false, results: null };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [requestData, setRequestData] = useState({
        method: "GET",
        url: "",
        body: "",
    });
    const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(-1);

    const fetchData = async () => {
        try {
            dispatch({ type: "REQUEST_START" });
            const response = await axios({
                method: requestData.method,
                url: requestData.url,
                data: requestData.body,
            });
            dispatch({ type: "REQUEST_SUCCESS", payload: response.data });
        } catch (error) {

            console.error("Error fetching data:", error);
            dispatch({ type: "REQUEST_ERROR" });

            console.error("Error fetching data :", error);

        }
    };

    useEffect(() => {
        if (requestData.url) {
            fetchData();
        }
    }, [requestData]);

    const handleFormSubmit = (formData) => {
        setRequestData(formData);
    };

    const handleHistoryItemClick = (index) => {
        setSelectedHistoryIndex(index);
    };

    return (
        <div className="app">
            <Header />
            <main>
                <Form onSubmit={handleFormSubmit} />
                <Results
                    data={state}
                    loading={state.loading}
                    onHistoryItemClick={handleHistoryItemClick}
                    selectedHistoryIndex={selectedHistoryIndex} // Pass selectedHistoryIndex as a prop
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
