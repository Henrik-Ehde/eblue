import './Gallery.css';
import React from 'react';
import GalleryItem from './GalleryItem';
import data from '../products.json';
let result = "testing";

export default function Gallery() {
    

  return (
    <section>
    <h2>HDMI products</h2>
    <div class="Gallery">
     {data.map((item) => {
        return item.type === "HDMI" && <GalleryItem 
            img={item.img}
            info={item.info}
            price={item.price}
                />
      })} 
    </div>
    <h2>USB products</h2>
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