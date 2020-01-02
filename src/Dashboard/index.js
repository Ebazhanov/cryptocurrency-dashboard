import React from 'react';
import styled from 'styled-components'
import Pages from "../Shared/Pages";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from "./PriceChart";

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15 px;
    grid-template-columns: 1fr 3fr;
`;

export default function () {
    return <Pages name="dashboard">
        <PriceGrid/>
        <ChartGrid>
            <CoinSpotlight/>
            <PriceChart/>
        </ChartGrid>
    </Pages>
}
