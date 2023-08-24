import React from "react";
import Image from "./Image";

const Gallery = ({ images }) => {
    return <div className="gallery">
      {images.length > 0 && (
        images.map(image => <Image imgObj={image}/>)
      )}
    </div>;
};

export default Gallery;
