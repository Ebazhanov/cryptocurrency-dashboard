import styled from 'styled-components';
import {greenBoxShadow, lightBlueBackground, redBoxShadow, subtleBoxShadow} from "./Styles";

export const Tile = styled.div`
        ${subtleBoxShadow}
        ${lightBlueBackground}
        padding: 10px;
    `;

export const SelectableTile = styled(Tile)`
    &:hover {
    cursor: pointer;
    ${greenBoxShadow}
    }
`;

export const DeletableTile = styled(SelectableTile)`
    &:hover {
    cursor: pointer;
    ${redBoxShadow}
    }
`;

export const DisableTile = styled(Tile)`
    point-events: none;
    opacity: 0.4;
`;
