import React from "react";
import styled from 'styled-components'
import {AppContext} from "../App/AppProvider";

const PriceGrid = styled.div`
    display: grid
`;

export default function (prices) {
    console.log('PRICES');
    console.log(prices + 'PRICES');
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceGrid>
                    {prices.map(price => <div> {Object.keys(price)[0]} </div>)}
                </PriceGrid>
            )}
        </AppContext.Consumer>
    );
}
