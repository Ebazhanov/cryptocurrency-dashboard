import React, {Component} from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from "./AppBar";
import {AppProvider} from './AppProvider';
import Settings from '../Settings'
import Content from "../Shared/Content";

class App extends Component {
    render() {
        return (
            <AppLayout>
                <AppProvider>
                    <AppBar/>
                    <Content>
                        <Settings/>
                    </Content>
                </AppProvider>
            </AppLayout>
        );
    }
}

export default App;
