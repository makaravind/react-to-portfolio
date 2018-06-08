import React, {Component} from 'react';
import styled from 'styled-components';
import image from '../../assets/11.jpg';
import Title from './title.component.';

import * as firebase from 'firebase';

const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const TitleImage = styled.img`
    height: 100%;
    justify-self: end;
`;

class HomeComponnent extends Component {

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
            <Layout>
                <Title details={this.state}/>
                <TitleImage src={image}/>
            </Layout>
        )
    }

}

export default HomeComponnent