import React from "react";
import styled, {css} from 'styled-components';
import {SelectableTile} from "../Shared/Tile";
import {fontSize3, fontSizeBig} from "../Shared/Styles";
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid";

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TicketPrice = styled.div`
  ${fontSizeBig};
`;

const ChangeSym = styled.div`
    color: blue;
`;

const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`;

const numberFormat = number => {
    return +(number + '').slice(0, 7)
};

const PriceTileStyled = styled(SelectableTile)`
   ${props => props.compact && css`
        display: grid;
        ${fontSize3}
        grid-gap: 5px;
        grid-template-columns: repeat(3, 1fr);
   `}
`;

function ChangePercent({data}) {
    return (<JustifyRight>
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
        </JustifyRight>
    )
}

function PriceTile({sym, data}) {
    return (
        <PriceTileStyled>
            <CoinHeaderGridStyled>
                <div>
                    <ChangeSym>
                        {sym}
                    </ChangeSym>
                </div>
                <ChangePercent data={data}/>
            </CoinHeaderGridStyled>
            <TicketPrice>
                ${numberFormat(data.PRICE)}
            </TicketPrice>
        </PriceTileStyled>
    )
}

function PriceTileCompact({sym, data}) {
    return (
        <PriceTileStyled compact>
                <JustifyLeft>
                    <ChangeSym>
                        {sym}
                    </ChangeSym>
                </JustifyLeft>
                <ChangePercent data={data}/>
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </PriceTileStyled>
    )
}

export default function ({price, index}) {
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 2 ? PriceTile : PriceTileCompact;
    return <PriceTile
        sym={sym} data={data}>
    </PriceTile>
}
