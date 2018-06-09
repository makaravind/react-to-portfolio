import React, {Component} from 'react';
import styled from 'styled-components';
import image from '../../assets/11.jpg';
import Title from './title.component.';


const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const TitleImage = styled.img`
    height: 100%;
    width: 90%;
    justify-self: end;
`;

class HomeComponnent extends Component {

    render() {
        return (
            <Layout>
                <Title details={this.props.details}/>
                <TitleImage src={image}/>
            </Layout>
        )
    }

}

export default HomeComponnent