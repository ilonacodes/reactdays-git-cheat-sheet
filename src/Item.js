import React from 'react';
import {css} from 'emotion';
import styled from 'react-emotion';

const ItemWrapper = styled('div')`
    flex-direction: column;
    break-inside: avoid-column;
    display: inline-flex ;
    width:100%;

`;

const ItemBorder = styled('div')`
    border: 1px solid slategrey;
    margin: 10px 0;
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

const CategoryStyle = (props) => {
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
};


export const Category = (props) => {
    return(
        <ItemWrapper>
            <ItemBorder>
                <CategoryStyle category={props.name}/>
                <div>
                    {props.category.map((item, index) =>
                        <div key={index}>
                            <Description description={item.description} />
                            <Command command={item.command} />
                        </div>
                    )}
                </div>
            </ItemBorder>
        </ItemWrapper>
    );
};
