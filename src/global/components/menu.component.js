import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Menu = styled.div`
    z-index: 10;
    background: rgba(235, 176, 84, 1);
    display: flex;
`;

const MenuItem = styled(Link)`
    padding: 0 0 0 25px;
    color: rgba(255, 255, 255, 1);
    font-size: 1em;
    align-self: center;
    text-decoration: none;
`;

function MenuComponent() {
    return (
        <Menu>
            <MenuItem to='/'>Home</MenuItem>
            <MenuItem to='/projects'>Projects</MenuItem>
            <MenuItem to='/contact'>Contact</MenuItem>
        </Menu>
    )
}

export default MenuComponent