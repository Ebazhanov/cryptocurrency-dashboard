import React from "react";
import styled, {css} from 'styled-components';
import {SelectableTile} from "../Shared/Tile";

export default function ({price, index}) {
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    return <SelectableTile>{sym}{data.PRICE}</SelectableTile>
}
