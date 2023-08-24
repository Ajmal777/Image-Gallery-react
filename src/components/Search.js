import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ setImages }) => {
    const [input, setInput] = useState("");
    const [sortBy, setSortBy] = useState("latest");
    const [popularBtn, setPopularBtn] = useState('');
    const [latestBtn, setLatestBtn] = useState('active-btn');
    const [oldestBtn, setOldestBtn] = useState('');

    // this useEffect will load images for the first time when the webpage loads 
    // and if any of the sort Button is clicked 
    // the sortBy state gets updated, to prevent incorrect sorting
    useEffect(loadImages, [sortBy]);

    function loadImages() {
        console.log(input, sortBy);
        const endpoint = input ? `search/photos` : "photos";
        axios
            .get(`https://api.unsplash.com/${endpoint}`, {
                params: {
                    query: input,
                    per_page: 20,
                    order_by: sortBy,
                },
                headers: {
                    Authorization:
                        "Client-ID JRXIy2Ey4-qunIK78bNkqzpbs9PLvze7OoXHZUbEWBA",
                },
            })
            .then((response) => {
                if (response.data.results) {
                    console.log(response.data.results);
                    setImages(response.data.results);
                } else {
                    console.log(response.data);
                    setImages(response.data);
                }
            })
            .catch((error) => console.log(error));
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") loadImages();
    }

    function handleSortClick(time){
        setSortBy(time)
        if(time === 'popular'){
            setPopularBtn('active-btn');
            setLatestBtn('');
            setOldestBtn('');
        }
        else if(time === 'latest'){
            setPopularBtn('');
            setLatestBtn('active-btn');
            setOldestBtn('');
        }
        else if(time === 'oldest'){
            setPopularBtn('');
            setLatestBtn('');
            setOldestBtn('active-btn');
        }
    }

    return (
        <div id="searchField" onKeyDown={handleKeyPress}>
            <input
                type="text"
                id="searchBar"
                placeholder="Search images"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button id="load-image" onClick={loadImages}>
                <AiOutlineSearch />
            </button>
            <div className="sort">
                <button id="latest"
                    className={`sort-btn ${latestBtn}`}
                    onClick={() => handleSortClick('latest')}
                >
                    Latest
                </button>
                <button id="oldest"
                    className={`sort-btn ${oldestBtn}`}
                    onClick={() => handleSortClick('oldest')}
                >
                    Oldest
                </button>
                <button id="popular"
                    className={`sort-btn ${popularBtn}`}
                    onClick={() => handleSortClick('popular')}
                >
                    Popular
                </button>
            </div>
        </div>
    );
};

export default Search;
