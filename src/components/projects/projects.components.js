import React, {Component} from 'react';
import styled from 'styled-components';
import ProjectItemComponent from './project-item.component';
import Loading from '../../global/loading.component';

const ProjectsContainer = styled.div`
    display: grid;
    justify-self: center;
    align-self: center;
    grid-template-columns: 50% 50%;
    grid-gap: 0.5em;
    background: ${props => props.length > 0 ? 'rgba(255, 255, 255, 0.13)' : 'rgba(255, 255, 255, 0)'};
    padding: 15px;
    border-radius: 6px;
    overflow: auto;
    height: 30em;
    margin-left: 20em;
    margin-right: 20em;
    overflow-x: hidden;
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr ;
    }
    
`;

class ProjectsComponent extends Component {

    constructor(props) {
        super(props);

        this.state={
            projects: []
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/makaravind/repos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    projects: json,
                });
            });
    }

    render() {
        return (
            <ProjectsContainer length={this.state.projects.length}>
                {
                    this.state.projects.length > 0 ?
                    this.state.projects.map(project => {
                        return <ProjectItemComponent project={project}/>
                    }) : <Loading/>
                }
            </ProjectsContainer>

        )
    }
}

export default ProjectsComponent