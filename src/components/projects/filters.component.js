import React from 'react';
import styled from 'styled-components';
import Container from '../../global/components/card-container.component';
import fork from '../../assets/code-fork-symbol.png';
import Title from '../../global/components/heading.component';

const Layout = styled.div`
    grid-column: 11 / -1;
    margin: 10px;
`;

const EachFilterContainer = styled.div`
    display: grid;
    grid-template-columns: 6fr 1fr;
`;

const Fork = styled.img`
    height: 2.5em;
    width: 2.5em;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.2)
    }
`;

const FiltersComponent = ({onToggleFilter, forkedAlso}) => {
    return (
        <Layout>
            <Title size='m'>Filters</Title>
            <Container>
                <EachFilterContainer>
                    <Title color='rgba(0,0,0,0.6)'>
                        Showing { forkedAlso && 'All'|| 'Only Mine' }
                    </Title>
                    <Fork
                        src={fork} alt="Toggle On Project Type"
                        onClick={() => onToggleFilter('fork')}
                    />
                </EachFilterContainer>
            </Container>
        </Layout>
    );
};

export default FiltersComponent;
