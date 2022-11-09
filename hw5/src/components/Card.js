import React from 'react';

const Card = ({title, price, image, onClick}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <button onClick={onClick} href="#" className="btn btn-primary">Add to cart</button>
                </div>
        </div>
    );
}

export default Card;