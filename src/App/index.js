import React, {Component} from 'react';
import './App.css';
import WelcomeMessage from "./WelcomeMessage";
import styled from 'styled-components';

const MyButton = styled.div`
    color:green;
`;

class App extends Component {
    render() {
        return (
            <div>
                <WelcomeMessage/>
                <MyButton>Hello</MyButton>
            </div>
        );
    }
}

export default App;
