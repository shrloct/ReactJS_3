import React, { useState, useMemo } from "react";

const calculatePrimes = (num) => {
  console.log("Calculating primes...");
  let primes = [];
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
};

const PrimeCalculator = () => {
  const [number, setNumber] = useState(10);
  const [darkTheme, setDarkTheme] = useState(false);

  const primeNumbers = useMemo(() => calculatePrimes(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "#333" : "#fff",
      color: darkTheme ? "#fff" : "#000",
      padding: "20px",
      marginTop: "20px",
      textAlign: "center",
    };
  }, [darkTheme]);

  return (
    <div style={themeStyles}>
      <h1>Prime Number Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />
      <button onClick={() => setDarkTheme((prevDarkTheme) => !prevDarkTheme)}>
        Toggle Theme
      </button>
      <h2>Primes up to {number}:</h2>
      <p>{primeNumbers.join(", ")}</p>
    </div>
  );
};

export default PrimeCalculator;
