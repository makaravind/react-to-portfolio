import React from 'react';
import styled, {keyframes} from 'styled-components';
import clock from '../assets/sand-clock.png';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    
    to {
        transform: rotate(360deg);
    }
`;

const StyledLoading = styled.img`
    height: 3em;
    animation: ${rotate} 2s linear infinite;
    align-self: center;
`;

function Loading() {
    return (
        <StyledLoading src={clock}/>
    )
}

export default Loading