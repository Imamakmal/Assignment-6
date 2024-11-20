import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Search from './component/search';
import Movie from './component/movie';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = '';

    const fetchMovies = useCallback(async (query = "Batman") => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
            const data = await response.json();
            if (data.Response === "True") {
                setMovies(data.Search || []);
            } else {
                console.error("No movies found or error:", data.Error);
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    }, [apiKey]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    return (
        <div>
            <Search onSearch={fetchMovies} />
            <Header title="Show your favorite movies" />
            <div className="container">
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                    <div className="row">
                        {movies.map((movie, index) => (
                            <Movie
                                key={index}
                                title={movie.Title}
                                imgSrc={movie.Poster}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
