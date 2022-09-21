import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css'

//Importando a URL da API pelo Vite e aramazenado em uma variavel
const moviesURL = import.meta.env.VITE_API;
//Importando a chave/KEY da API do env
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    //Ideia é classificar os melhores filmes usando o useState
    const [topMovies, setTopMovies] = useState([]);

    //Irei fazer a requesição da API então sera uma função async
    const getTopRatedMovies = async (url) => {
        //variavel aonde terei uma resposta
        const res = await fetch(url);
        //variavel aonde receberei os dados e tranformarei os dados em uma array de objetos JS
        const data = await res.json();

        //Preenchendo o TopMovies com os melhores filmes | a const data transformou os dados em um array de objetos e agora estou enviando apena a propriedade results aonde estão os filmes
        setTopMovies(data.results);
    };

    useEffect(() => {
        //esta variavel ira armazenar os melhores filmes da api/ o top_rated faz parte da documentação da api que retorna os filmes tops/ a variavel armazena a URL da API o método da API e a chave da API
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        //fazendo a requisição da api para extrair os melhores filmes da api
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {/* Forma de fazer um Load */}
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Home;
