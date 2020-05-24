import React from "react";

import styled, {css} from 'styled-components';


const Wrapper = styled.section`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Columns = styled.div`
    display: flex;
    ${props => props.width90 && css`
        width: 90%;
    `}
    ${props => props.center && css`
        margin: 0 auto;
    `}
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    
    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.narrow && css`
        flex: none;
    `}

    ${props => props.mb60 && css`
        margin-bottom: 60px;
    `}
    @media (max-width: 1200px) {
        text-align: center;
    }
`;

const IMG = styled.img`
    max-width: 75%;
    ${props => props.eighty && css`
        max-width: 80%;
    `}
`;

const H2 = styled.h2`
    font-size: 22px;
    color: white;
    padding-right: 1em;
    font-weight: 200;
    margin: 1em 0 20px;
    ${props => props.inline && css`
        display: inline-flex;
    `}
`;


const H3 = styled.h3`
    color: black;
    text-align: center;
`;

const Des = styled.p`
    color: #999;
    text-align: center;
    font-size: 16px;
    direction: ltr;
    font-weight: 100;
`;




const Contact = () => {
    return (
        <Wrapper>
            <Columns>
                <Column center>
                  <br />
                 
                    <H3>NEPAL CODES</H3>
                    <Des> hello hellohellohellohel lohellohell ohellohellohel lohello hellohello
                    </Des>
                </Column>

                <Column center>
                    <br />
                    <H3>Another Group
                    </H3>
                    <Des>More infro about group here . More infro about group here . More infro about group here . 
                    </Des>
                </Column>

                <Column center>
                    < br/>
               
                    <H3>Another Group</H3>
                    <Des>More infro about group here . More infro about group here . More infro about group here . </Des>
                </Column>

            </Columns>
        </Wrapper>
    )
}

export default Contact;