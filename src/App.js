import React, {useEffect, useState} from 'react';
import {Block} from './Block';
import './index.scss';

const rates = {
    "EUR": 0.893439,
    "GBP": 0.718131,
    "JPY": 110.472557,
    "CAD": 1.258358,
    "AUD": 1.355567,
    "CHF": 0.938434,
    "USD": 1.0,
    "HKD": 7.774038,
    "SGD": 1.353979,
    "NZD": 1.461782,
    "CNY": 6.391944,
    "SEK": 8.978292,
    "NOK": 8.678522,
    "DKK": 6.378407,
    "RUB": 74.067119,
    "BRL": 5.464495,
    "INR": 74.559485,
    "ZAR": 14.621227,
    "MXN": 20.03591,
    "IDR": 14151.215,
    "MYR": 4.128259,
    "THB": 32.734327,
    "PHP": 50.150371,
    "TRY": 9.536481,
    "HRK": 6.465836,
    "ISK": 123.063286,
    "PLN": 3.966862,
    "ILS": 3.240235,
    "RON": 4.118528,
    "HUF": 304.942292,
    "CZK": 21.869775,
    "KRW": 1178.302202,
    "BGN": 1.746712
}


function App() {
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('CNY');
    const [fromPrice, setFromPrice] = useState(100);
    const [toPrice, setToPrice] = useState(0);

    const onChangeFromPrice = (value) => {
        const price = value / rates[fromCurrency];
        const result = (price * rates[toCurrency]).toFixed(4);
        setFromPrice(value);
        setToPrice(result);
    };

    const onChangeToPrice = (value) => {
        const result = ((rates[fromCurrency] / rates[toCurrency]) * value).toFixed(4);
        setFromPrice(result);
        setToPrice(value);
    };

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency, fromPrice]);

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [toCurrency]);

    return (
        <div className="App">
            <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>

    );
}

export default App;
