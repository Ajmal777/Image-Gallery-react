import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Gallery from "./components/Gallery";

function App() {
    const [images, setImages] = useState({});
    return (
        <div className="App">
            <h1>Image Gallery</h1>
            <Search setImages={setImages} />
            <Gallery images={images} />
        </div>
    );
}

export default App;
