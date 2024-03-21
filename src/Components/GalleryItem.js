import './GalleryItem.css';
import React from 'react';

export default function GalleryItem(props) {
    const picPath = "img/";
    return (
        <>
            <div class="GalleryItem">
                <img src={picPath + props.img} alt="" />
                <div>
                    <p>{props.info}</p>
                    <p>Price {props.price} £</p>
                    <button>Buy</button>
                </div>
            </div>
        </>
    );
}
