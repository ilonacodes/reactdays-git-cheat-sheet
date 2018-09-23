import React from 'react';
import {connect} from 'react-redux';
import {Item} from './Item';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const GitCheatSheetComponent = ({searchResults}) => {
    return(
        <Container>{searchResults.map((result, index) =>
            <div key={index}>
                <Item result={result}/>
            </div>
        )}</Container>
    );
};

const mapStateToProps = (state) => {
    return {
        searchResults: state.searchResults
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export const GitCheatSheet = connect(
    mapStateToProps,
    mapDispatchToProps
)(GitCheatSheetComponent);