import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    justify-self: center;
    align-self: center;
`;

const Text = styled.h1`
    margin-bottom: 0;
    font-family: 'Shadows Into Light', cursive;;
    color: rgba(201, 210, 219, 1);
    font-size: 5em;
`;

const Caption = styled.h1`
    padding: 0;
    margin: 0;
    font-family: 'Shadows Into Light', cursive;;
    color: rgba(201, 210, 219, 1);
    font-size: 1.5em;
`;

function Title({details: {name}}) {
    return (
        <Layout>
            <Text>Hi, I'm {name}</Text>
            <Caption>Let's Meet On Edge Of The Universe...</Caption>
        </Layout>
    )
}

export default Title