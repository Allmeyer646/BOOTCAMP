import React from 'react';
import NavItems from './nav-items';
import {Link} from 'react-router-dom'

export default function NavBar (props) {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            AOK Farm
                <ul className='navbar-nav mr-auto px-2'>
                    <Link className='link px-2' to="/"><NavItems link={'Home'}/></Link>
                    <Link className='link px-2' to="/products"><NavItems link={'Products'}/></Link>
                    <Link className='link px-2' to="/about"><NavItems link={'About'}/></Link>
                </ul>
        </nav>
    )
}