import React from 'react';
import styled from 'styled-components';

import LinkedIn from '../../assets/linkedin.png';
import YouTube from '../../assets/youtube.png';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';

import {FACEBOOK, LINKEDIN, YOUTUBE, TWITTER} from '../../global/app.constants';
import {goToLink} from '../../global/utility';

const Layout = styled.div`
    align-self: end;

    display: flex;
`;

const Icon = styled.img`
    margin-left: 0.8em;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.2)
    }
`;

const SocialMediaIcons = () => {
    return (
        <Layout>
            <Icon src={LinkedIn} onClick={() => goToLink(LINKEDIN)}/>
            <Icon src={YouTube} onClick={() => goToLink(YOUTUBE)}/>
            <Icon src={Twitter} onClick={() => goToLink(TWITTER)}/>
            <Icon src={Facebook} onClick={() => goToLink(FACEBOOK)}/>
        </Layout>
    );
};

export default SocialMediaIcons;
