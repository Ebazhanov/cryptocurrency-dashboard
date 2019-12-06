import React from 'react';
import WelcomeMessage from "./WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Pages from "../Shared/Pages";

export default function () {
    return <Pages name="settings">
        <WelcomeMessage/>
        <ConfirmButton/>
    </Pages>
}
