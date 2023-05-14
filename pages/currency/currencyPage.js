import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Currency.module.css";
import Layout from "@/components/Layout";

function CurrencyPage() {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState("TRY");
  const [currency2, setCurrency2] = useState("USD");
  const [rates, setRates] = useState([]);

  const madebyMuefdo = "@muefdo";

  
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest",
      headers: {
        "X-RapidAPI-Key": "0437f24fbbmshea6e4d9a019b5f4p101932jsn546e4de70693",
        "X-RapidAPI-Host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    axios.request(options).then((resonse) => setRates(resonse.data.rates));

  }, []);

  function handleAmount1(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleCurrency1(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }
  function handleAmount2(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }
  function handleCurrency2(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  function format(number) {
    return number.toFixed(4);
  }

  return (
    <Layout>
      <div className={styles.currencyBody}>
        <h1 className={styles.currencyH1}>Currency Calculator</h1>
        <CurrencyInput
          onAmountChange={handleAmount1}
          onCurrencyChange={handleCurrency1}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={handleAmount2}
          onCurrencyChange={handleCurrency2}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div>
    </Layout>
  );
}

export default CurrencyPage;

function CurrencyInput(props) {
  return (
    <div className={styles.group}>
      <input
        className={styles.input}
        type="text"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select
        className={styles.select}
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
          <option className={styles.option} key={currency} value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};
