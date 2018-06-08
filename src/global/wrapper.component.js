import React from 'react';
import styled from 'styled-components';

import MenuComponent from './menu.component';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto;
    background: rgba(68, 41, 76, 1);
    height: 100%;
`;


function WrapperComponent({ children }) {
    return (
        <Layout>
            <MenuComponent/>
            {children}
        </Layout>
    )
}

export default WrapperComponent