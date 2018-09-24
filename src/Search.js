import React from 'react';
import {Formik} from 'formik';
import {css} from 'emotion';
import styled from 'react-emotion';

const CustomForm = styled('form')`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`;

const CustomLabel = styled('label')`
    transition: all 150ms ease-in;
    color: #676767;
    margin-top: 20px;
    line-height: 0;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    @media (max-width: 767px) {
        font-size: 14px;
    }
`;

const fieldActive = css`
    transform: translateY(-25px);
    font-size: .9em;
    color: #000;
`;

const floatingLabel = css`
   margin-bottom: 20px;
   background-color: transparent;
   border: 0;
   border-bottom: 2px solid #4a4a4a;
   color: slategrey;
   font-size: 18px;
   outline: 0;
   padding: 5px 40px;
   text-align: center;
   -webkit-transition: all .3s;
   -o-transition: all .3s;
   transition: all .3s;
`;

export class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            inputValue: '',
            fieldActive: false
        };

        this.fieldActivate = this.fieldActivate.bind(this);
        this.disableFocus = this.disableFocus.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    fieldActivate() {
        this.setState({
            fieldActive: true
        });
    }

    disableFocus(e) {
        e.preventDefault();
        if (e.target.value === '') {
            this.setState({
                fieldActive: false
            });
        }
    }

    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
        this.fieldActivate();
        e.preventDefault();
    }

    render() {
        return (
            <Formik
                initialValues={this.state.inputValue}
                render={props =>
                    <CustomForm onSubmit={props.handleSubmit}>
                        <CustomLabel className={this.state.fieldActive ? fieldActive : ''}>The Awesome Git Cheat Sheet 🔍</CustomLabel>
                        <input type="text"
                               className={floatingLabel}
                               onFocus={this.fieldActivate}
                               onBlur={this.disableFocus}
                               onChange={this.updateInputValue}
                        />
                    </CustomForm>
                }
            />
        );
    }

};