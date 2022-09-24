import {Link} from 'react-router-dom'

import {FaStar} from 'react-icons/fa'

//Url das imagens dos filmes
const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie-card'>
        {/* Trazendo a imagem da API da capa do filme pela variavel imageUrl */}
        {/* Estou concatenando a variavel imageUrl com a propriedade da API que é o poster_path */}
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
    </div>
  )
}

export default MovieCard;
