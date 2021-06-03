import React from 'react';
import './Item.css';

const Item = (breed)  => {
    const data = breed;
    return(
        <>
            <div className="cat-card">
                <img className="card-image lazy" src={(JSON.stringify(data.breed.url)).replace(/"/gi,"")} ></img>
                <article className="card-info">
                    <p className="cat-name"> {data.breed.breeds.length > 0 ? data.breed.breeds[0].name : "정보없음"} </p>
                    <p className="cat-origin">{data.breed.breeds.length > 0 ? data.breed.breeds[0].origin : "정보없음"}</p>
                </article>
            </div>
        </>
    )
}

export default Item;