import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';

const ItemWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 0 5px;
`;

const ItemBorder = styled('div')`
    border: 1px solid slategrey;
    margin-top: 10px;
`;

const itemCategory = css`
    background-color: slategrey;
    color: white;
    text-transform: uppercase;
    font-size: 13px;
    padding: 5px;
    letter-spacing: 1px;
`;

const itemDescription = css`
    color: slategrey;
    font-size: 13px;
    padding: 10px;
`;

const itemCommand = css`
    color: #333;
    background-color: orange;
    font-size: 13px;
    padding: 5px 10px;
`;

const Category = (props) => {
    return (
        <div className={itemCategory}>{props.category}</div>
    );
};

const Description = (props) => {
    return (
        <div className={itemDescription}>{props.description}</div>
    );
};

const Command = (props) => {
    return (
        <div className={itemCommand}>$ {props.command}</div>
    );
}

export const Item = (props) => {
    return (
        <ItemWrapper>
            <ItemBorder>
                <Category category={props.result.category} />
                <Description description={props.result.description} />
                <Command command={props.result.command} />
            </ItemBorder>
        </ItemWrapper>
    );
}