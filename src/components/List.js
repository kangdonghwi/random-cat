import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';
import './List.css';
import { debounce } from '../utils/util';

const List = ()  => {
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async() => {
        setLoading(true);
        try{
            const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=20');
            setBreeds(breeds.concat(response.data));
        }catch(e){
            console.log(e);
        }
        setLoading(false);
    }

    const onScroll = useCallback((e) => {
        const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
        if (scrollTop + clientHeight === scrollHeight) {
            fetchData();
        }
    },[loading]);

    
    useEffect(()=> {
        fetchData();
    },[]);

  
    useEffect(() => {
        document.addEventListener("scroll", debounce(onScroll, 500));
    },[onScroll]);

    if(loading){
        return<p>대기중</p>
    }
    
    return(
        <>
            <div className ="search-section" >
                <span className="random-btn">🐱</span>
                <div className="search-box-wrapper">
                    <input className="search-box" />
                </div>
            </div>
            <section className="results-section">
                <div className="card-container">
                    {breeds.map(breed => (
                        <Item key={breed.url} breed={breed}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default List;