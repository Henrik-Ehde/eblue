import './Gallery.css';
import React from 'react';
import GalleryItem from './GalleryItem';
import data from '../products.json';


export default function Gallery() {


    return (
        <section>
            <h2 class="ProductType">HDMI products</h2>
            <div class="Gallery">
                {data.map((item) => {
                    return item.type === "HDMI" && <GalleryItem
                        img={item.img}
                        info={item.info}
                        price={item.price}
                    />
                })}
            </div>
            <h2 class="ProductType">USB products</h2>
            <div class="Gallery">
                {data.map((item) => {
                    return item.type === "USB" && <GalleryItem
                        img={item.img}
                        info={item.info}
                        price={item.price}
                    />
                })}
            </div>
        </section>
    );
}