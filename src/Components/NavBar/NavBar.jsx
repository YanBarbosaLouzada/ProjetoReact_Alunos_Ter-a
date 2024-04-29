import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    return (
        <nav id='navbar'>
            <div>
                <Link to='/' > Home </Link>
            </div>

            <div>
                <Link to='/anime' > Animes </Link>
            </div>
            
            <div>
                <Link to='/favorito' > Favorito </Link>
            </div>
        </nav>
    )
}

export default NavBar;