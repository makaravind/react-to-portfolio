import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as firebase from 'firebase';
import WrapperComponent from './global/components/wrapper.component';
import HomeComponent from './components/home/home.component';
import ProjectsComponent from './components/projects/projects.components';

var projects = [

    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    },
    {
        name: 'React-To-Projects',
        description: 'some description here',
        link: 'www.google.com'
    }
];

class App extends Component {

    constructor() {
        super();
        this.state = {
            name: 'No Name'
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child('details');
        rootRef.on('value', snap => {
           this.setState({
               name: snap.val().name
           })
        });
    }

    render() {
        return (
            <BrowserRouter>
                <WrapperComponent>
                    <Switch>
                        <Route exact path='/' render={() => {
                            return <HomeComponent details={this.state}/>
                        }}/>
                        <Route path='/projects' render={() => {
                            return <ProjectsComponent projects={projects}/>
                        }}/>
                    </Switch>
                </WrapperComponent>
            </BrowserRouter>
        );
    }
}

export default App;