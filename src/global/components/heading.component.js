import React from 'react';
import styled from 'styled-components';

const sizeMap = {
    'm': '2em',
    's': '1em',
    'l': '5em'
};

const Title = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: ${props => sizeMap[props.size]};
    color: ${props => props.color}
`;

function Heading({children, size = 's', color = 'white'}) {
    return <Title size={size} color={color}>{children}</Title>
}

export default Heading