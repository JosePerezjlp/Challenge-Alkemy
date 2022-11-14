import React from 'react';
import { Link } from 'react-router-dom';
import Buscador from '../buscador/buscador';

function Header (){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} >Home</Link>
                    </li>
                    <li>
                        <Link to={'/listado'} >Listado</Link>
                    </li>
                    <li>
                        <Link to={'/nosotros'} >Nosotros</Link>
                    </li>
                </ul>
                <Buscador/>
            </nav>
        </header>
    )
}

export default Header;