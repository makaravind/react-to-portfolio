import React, {Component} from 'react';
import styled from 'styled-components';
import ProjectItemComponent from './project-item.component';
import ProjectsIntroComponent from './projects-intro.component';

const ProjectsContainer = styled.div`
    grid-column: 3 / 10;

    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5em;
    background: ${props => props.length > 0 ? 'rgba(255, 255, 255, 0.13)' : 'rgba(255, 255, 255, 0)'};
    padding: 15px;
    border-radius: 6px;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
    overflow-x: hidden;
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
    
`;

class GitHubProjectsComponent extends Component {


    getProjectComponentsOnLoad() {
        const projectItemsComponents = this.props.projects.map(project => {
            return <ProjectItemComponent project={project}/>
        });
        const projectsCount = projectItemsComponents.length || 0;
        return [<ProjectsIntroComponent projectsCount={projectsCount}/>,
            ...projectItemsComponents]
    }

    render() {
        return (
            <ProjectsContainer length={this.props.projects.length}>
                {this.getProjectComponentsOnLoad()}
            </ProjectsContainer>
        );
    }
}


export default GitHubProjectsComponent;
