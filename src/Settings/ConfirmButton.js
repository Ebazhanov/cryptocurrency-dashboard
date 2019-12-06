import React from 'react';
import styled from 'styled-components'
import {AppContext} from "../App/AppProvider";
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    padding: 5px;
    corsor: pointer;
    cursor: pointer;
        &:hover{
        ${greenBoxShadow}
`;

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`;

export default function () {
    return <AppContext.Consumer>
        {({confirmFavorites}) =>
            <CenterDiv>
                <ConfirmButtonStyled onClick={confirmFavorites}>
                    Confirm Favorites
                </ConfirmButtonStyled>
            </CenterDiv>
        }
    </AppContext.Consumer>;
}
