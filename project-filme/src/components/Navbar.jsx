import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [search, setSearch] = useState('');
    //Hook useNavigate ele redireciona os componentes
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //Validação do Procurar/Search
        if (!search) return
        //uso do Navigate/Hook para redirecionar para outro componente/Página
        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return (
        <div>
            <nav id="navbar">
                <h2>
                    <Link to="/">
                        <BiCameraMovie id='svg-logo' /> Well <span>Cine</span>
                    </Link>
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Busque um Filme"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button id='search-svg' type="submit">
                        <BiSearchAlt2 />
                    </button>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;
