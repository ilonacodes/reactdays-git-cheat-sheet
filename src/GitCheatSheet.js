import React from 'react';
import {connect} from 'react-redux';

const GitCheatSheetComponent = ({searchResults}) => {
    return(
        <div>{searchResults.map((result, index) =>
            <div key={index}>{result.category}</div>
        )}</div>
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