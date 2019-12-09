import React from 'react';
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Pages from "../Shared/Pages";
import CoinGrid from "./CoinGrid";

export default function () {
    return <Pages name="settings">
        <WelcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton/>
        <CoinGrid/>
    </Pages>
}
