import React from 'react';
import styled from 'styled-components';


const Menu = styled.div`
    z-index: 10;
    background: rgba(235, 176, 84, 1);
    display: flex;
`;

const MenuItem = styled.h5`
    padding: 0 0 0 25px;
    color: rgba(255, 255, 255, 1);
    font-size: 1em;
    align-self: center;
`;

function MenuComponent() {
    return (
        <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>Contact</MenuItem>
        </Menu>
    )
}

export default MenuComponent