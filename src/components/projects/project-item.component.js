import React from 'react';
import styled from 'styled-components';
import star from '../../assets/star.png';
import Title from '../../global/components/heading.component';
import Container from '../../global/components/card-container.component';

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
        <Container key={project.id}>
            <TitleContainer>
                <Title><a href={project.html_url}>{project.name}</a></Title>
                <StarContainer>
                    <StarImage src={star}/> {project.stargazers_count}
                </StarContainer>
            </TitleContainer>
            <Description>
                {project.description ? project.description : 'no description'}
            </Description>
        </Container>
    )
}

export default ProjectItemComponent