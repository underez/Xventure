import React, { useState, useEffect } from 'react';
import './ExchangeRatesComponent.css';

const ExchangeRatesComponent = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(0); // Default to 1
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExchangeRates();
  }, [baseCurrency, targetCurrency]);

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      if (response.ok) {
        const data = await response.json();
        setExchangeRates(data.rates);
        setError(null);
      } else {
        setError('Failed to fetch exchange rates');
      }
    } catch (error) {
      setError('Error fetching exchange rates');
    } finally {
      setLoading(false);
    }
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  return (
    <div className='exchange-rate-container'>
      <h1>Exchange Rates</h1>
      <div className="currency-selectors">
        <label className='label'>
          Base Currency:
          <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese Yen</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="KRW">Korean Won</option>
            <option value="AUD">Australian Dollar</option>
            <option value="CAD">Canadian Dollar</option>
            <option value="THB">Thai Baht</option>

          </select>
        </label>
        <label className='label'>
          Target Currency:
          <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="JPY">Japanese Yen</option>
            <option value="CNY">Chinese Yuan</option>
            <option value="KWN">Korean Won</option>
            <option value="AUD">Australian Dollar</option>
            <option value="CAD">Canadian Dollar</option>
             <option value="THB">Thai Baht</option>
            
          </select>
        </label>
        <label className='label'>
          Amount:
          <input type="number" value={amount??0} onChange={handleAmountChange} />
        </label>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="exchange-rate-info">
          <h2>Exchange Rate</h2>
          <ul>
            <li>{amount} {baseCurrency} = {amount * exchangeRates[targetCurrency]} {targetCurrency}</li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default ExchangeRatesComponent;
