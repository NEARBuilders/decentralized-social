import { createFileRoute } from "@tanstack/react-router";
import { Layout } from '../components/layout';
import React, { useState, useEffect } from 'react';
import Big from 'big.js';

export const Route = createFileRoute("/stake")({
  component: Stake,
});

function Stake() {
  const [isUnstakeSelected, setIsUnstakeSelected] = useState(false);
  const [amount, setAmount] = useState('');
  const [nearBalance, setNearBalance] = useState('0');
  const [userLoggedIn, setUserLoggedIn] = useState(''); // You'll need to implement user login logic

  useEffect(() => {
    async function fetchBalance() {
      if (userLoggedIn) {
        try {
          const response = await fetch(`https://api3.nearblocks.io/v1/account/${userLoggedIn}`);
          const data = await response.json();
          const balance = Big(data?.account?.[0]?.amount ?? "0")
            .div(Big(10).pow(24))
            .toFixed(4);
          setNearBalance(balance);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    }
    fetchBalance();
  }, [userLoggedIn]);

  const onStake = () => {
    // Implement Near.call logic here
    console.log("Staking", amount, "NEAR");
  };

  const onUnstake = () => {
    // Implement Near.call logic here
    console.log("Unstaking", amount, "NEAR");
  };

  const isAmountValid = parseFloat(amount) > 0 && parseFloat(amount) <= parseFloat(nearBalance);

  return (
    <Layout>
      <div className="container">
        <h1>🛠️ Build Stake 🚀</h1>
        <p className="tagline">
          {isUnstakeSelected ? "Unstake from" : "Stake to"} builddao.poolv1.near
        </p>
        <div className="card-content">
          <div className="toggle-container">
            <button 
              className={`toggle-button ${!isUnstakeSelected ? 'active' : ''}`}
              onClick={() => setIsUnstakeSelected(false)}
            >
              Stake
            </button>
            <button 
              className={`toggle-button ${isUnstakeSelected ? 'active' : ''}`}
              onClick={() => setIsUnstakeSelected(true)}
            >
              Unstake
            </button>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              id="amount" 
              placeholder="1 NEAR" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="balance">Balance: {nearBalance} NEAR</div>
          </div>
          {!isUnstakeSelected && parseFloat(amount) > parseFloat(nearBalance) && (
            <p className="error">Stake amount is more than your balance</p>
          )}
        </div>
        <div className="container-footer">
          <div className="button-container">
            <button 
              className={`cta ${!isAmountValid ? 'disabled' : ''}`}
              onClick={isUnstakeSelected ? onUnstake : onStake}
              disabled={!isAmountValid}
            >
              {isUnstakeSelected ? 'Unstake 🔓' : 'Stake 🔒'}
            </button>
            <a 
              href="https://app.potlock.org/?tab=project&projectId=build.sputnik-dao.near" 
              className="cta" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Donate 🎁
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}