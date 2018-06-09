import React from 'react';
import Title from '../../global/components/heading.component';
import github from '../../assets/github.png';
import styled from 'styled-components';
import {GITHUB} from '../../global/app.constants';

const GitHubIcon = styled.img`
    height: 10em;
    width: 10em;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.2)
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: 5fr 1fr;
    justify-items: center;
`;

const goToLink = () => {
    window.location = GITHUB;
};


const ProjectIntroComponent = ({projectsCount}) => {
    return (
        <Layout>
            <Title color='rbga(0,0,0,1)' size='m'>
                {projectsCount} Projects Sourced from my
            </Title>
            <GitHubIcon src={github} alt="github" onClick={goToLink}/>
        </Layout>
    );
};

export default ProjectIntroComponent;
