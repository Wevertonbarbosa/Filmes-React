import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MovieGrid.css';

const Search = () => {
    //Sintaxe de invocar o  useSearchParams
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    //esta função ira me permitir que eu extraia da URL o parametro procurado
    const query = searchParams.get('q');

    //Irei fazer a requesição da API então sera uma função async
    const getSearchedMovies = async (url) => {
        //variavel aonde terei uma resposta
        const res = await fetch(url);
        //variavel aonde receberei os dados e tranformarei os dados em uma array de objetos JS
        const data = await res.json();
        //Preenchendo o TopMovies com os melhores filmes | a const data transformou os dados em um array de objetos e agora estou enviando apena a propriedade results aonde estão os filmes
        setMovies(data.results);
    };

    useEffect(() => {
        //esta variavel ira armazenar os melhores filmes da api/ o top_rated faz parte da documentação da api que retorna os filmes tops/ a variavel armazena a URL da API o método da API e a chave da API
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        //fazendo a requisição da api para extrair os melhores filmes da api
        getSearchedMovies(searchWithQueryURL);
        //Estou adicionando um gatilho para que o useEffect entenda que estou procurando outra palavra do Query então sempre que mudar o query ele vai ele vai executar o comando novamente mais de uma vez
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {/* Forma de fazer um Load */}
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default Search;
