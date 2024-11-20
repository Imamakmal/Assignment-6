import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div className="container-fluid p-0">
            <nav className="navbar" style={{ backgroundColor: '#FF6500' }}>
                <button className="navbar-brand text-white ms-5" style={{ background: 'none', border: 'none' }}>
                    FinProH8
                </button>
                <form className="d-flex me-5" role="search" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            value={query}
                            onChange={handleInputChange}
                        />
                        <button className="btn btn-dark" type="button" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </form>
            </nav>
        </div>
    );
};

export default Search;