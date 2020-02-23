import React from 'react';

import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className="header">
        <NavLink to="/" className="logo">Todo World</NavLink>
        <div className="header-right">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/showtodo">Show todo</NavLink>
            <NavLink to="/addtodo">Add todo</NavLink>
        </div>
    </div>
);

export default Header;