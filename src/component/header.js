import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="container my-3">
            <h2 className="text-primary">{title}</h2>
        </header>
    );
};

export default Header;
