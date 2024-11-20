import React from 'react';

const Movie = ({ title, imgSrc }) => {
    return (
        <div className="col-3 p-3">
            <div className="card">
                <img src={imgSrc} className="card-img-top" alt={title} />
                <div className="card-body text-white" style={{ backgroundColor: '#FF6500' }}>
                    <p className="card-text text-center">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Movie;