import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    background: rgba(255, 255, 255, 1);
    padding: 25px;
    border-radius: 6px;

`;

const CardComponent = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default CardComponent;
