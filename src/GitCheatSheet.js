import React from 'react';
import {connect} from 'react-redux';
import {Category, Item} from './Item';
import styled from 'react-emotion';

const Container = styled('div')`
    margin: 0 45px;
    columns: 3;
  
  @media (max-width: 767px) {
      margin: 0 15px;
      columns: 1;
  }
`;

const GitCheatSheetComponent = ({searchResults}) => {
    let categories = {};
    {searchResults.forEach(result => {
        if (typeof categories[result.category] === "undefined") {
            categories[result.category] = [];
        }
        categories[result.category].push(result)
    })}

    // Object.keys() returns an array of given object's own property.
    return(
        <Container>{Object.keys(categories).map((categoryName, index) =>
            <div key={index}>
                <Category category={categories[categoryName]} name={categoryName}/>
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