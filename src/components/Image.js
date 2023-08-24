import React from "react";

const Image = ({ imgObj }) => {
    let size = '';
    if(imgObj.width < imgObj.height) size = 'tall';

    return (
        <div className={size}>
            <img
                className="img"
                src={imgObj.urls.small}
                alt={imgObj.alt_description}
            />
        </div>
    );
};

export default Image;
