import React, {Component} from 'react';
import styled from 'styled-components';
import FiltersComponent from './filters.component';
import GitHubProjectsComponent from "./github-projects.component";
import Loading from '../../global/components/loading.component';

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    overflow: auto;
`;


class ProjectsComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            forkedProjectsAlso: true
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

    onToggleFilter = (filterName) => {
        switch (filterName) {
            case 'fork':
                this.setState((currentState) => {
                    return {
                        forkedProjectsAlso: !currentState.forkedProjectsAlso
                    };
                });
        }
    };

    getProjects = () => {
       return this.state.projects
           .filter(project => {
               return this.state.forkedProjectsAlso ||
                   project.fork === this.state.forkedProjectsAlso;
           }).sort((a, b) => {
               const refProp = 'updated_at';
               return new Date(b[refProp]) - new Date(a[refProp])
           });
    };

    render() {
        return (
            this.state.projects.length > 0 ?
                <Layout>
                    <GitHubProjectsComponent projects={this.getProjects()}/>
                    <FiltersComponent
                        onToggleFilter={this.onToggleFilter}
                        forkedAlso={this.state.forkedProjectsAlso}
                    />
                </Layout>
                : <Loading/>
        )
    }
}

export default ProjectsComponent