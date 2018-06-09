import React, {Component} from 'react';
import styled from 'styled-components';
import image from '../../assets/11.jpg';
import Title from './title.component.';
import SocialMediaIcons from "./social-media-icons.component";


const Layout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
`;

const TitleImage = styled.img`
    height: 100%;
    width: 90%;
    justify-self: end;
`;

class HomeComponent extends Component {

    render() {
        return (
            <Layout>
                <Title details={this.props.details}/>
                <TitleImage src={image}/>
            </Layout>
        )
    }

}

export default HomeComponent