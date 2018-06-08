import React from 'react';
import styled from 'styled-components';
import star from '../../assets/star.png';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    
    background: rgba(255, 255, 255, 1);
    padding: 25px;
    border-radius: 6px;

`;

const Title = styled.h3``;

const Description = styled.p`
    font-size: 0.8em;
    color: rgba(0,0,0,0.6);
`;

const StarImage = styled.img`
    height: 1em;
    
`;

const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr; 

    
    @media (max-width: 500px) {
        grid-template-columns: 2fr 1fr; 
    }
`;

const StarContainer = styled.div`
    align-self: center;
    justify-self: end;
`;



function ProjectItemComponent({project}) {
    return (
        <Container>
            <TitleContainer>
                <Title><a href={project.html_url}>{project.name}</a></Title>
                <StarContainer>
                    <StarImage src={star}/> {project.stargazers_count}
                </StarContainer>
            </TitleContainer>
            <Description>{project.description}</Description>
        </Container>
    )
}

export default ProjectItemComponent