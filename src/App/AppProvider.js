import React from "react";
import _ from 'lodash'

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'settings',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins
        }
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    };

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if (!favorites.includes(key) && favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({favorites})
        }
    };

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)})
    };

    isInFavorites = key => _.includes(this.state.favorites, key);

    fetchPrices = async () => {
        if(this.state.firstVisit) return;
        let prices = await this.prices();
        // We must filter the empty price objects (not in the lecture)
        prices = prices.filter(price => Object.keys(price).length);
        this.setState({prices});
    };

    prices = async () => {
        let returnData = [];
        for(let i=0; i<this.state.favorites.length; i++){
            try{
                let priceDate = await cc.priceFull(this.state.favorites[i], 'USD');
                returnData.push(priceDate);
            } catch (e){
                console.warn('Fetch price error: ', e);
            }
        }
        return returnData;
    };

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        }, () => {
            this.fetchPrices();
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }));
    };

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return {page: 'settings', firstVisit: true}
        }
        let {favorites} = cryptoDashData;
        return favorites;
    }

    setPage = page => this.setState({page});

    setFilteredCoins = (filteredCoins) => this.setState({filteredCoins});

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
