import React, { useState, useEffect, useContext, useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    const navigate = useNavigate();
  
    const fetchCounter = useCallback(async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/counter');
        dispatch({ type: 'SET', count: response.data.count });
      } catch (err) {
        console.error(err);
      }
    }, [dispatch]);
  
    useEffect(() => {
      fetchCounter();
    }, [fetchCounter]);
  
    // const incrementCounter = useCallback(async () => {
    //   try {
    //     await axios.post('http://localhost:5000/api/counter/increment');
    //     dispatch({ type: 'INCREMENT' });
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }, [dispatch]);
  
    // const decrementCounter = useCallback(async () => {
    //   try {
    //     await axios.post('http://localhost:5000/api/counter/decrement');
    //     dispatch({ type: 'DECREMENT' });
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }, [dispatch]);
  
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {state.count}</p>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  };

 export default Counter;