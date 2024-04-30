import React, { useState, useEffect, useContext, useReducer, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




const Home = () => {
    const { state } = useContext(CounterContext);
  
    return (
      <div>
        <h1>Counter Value: {state.count}</h1>
        <Link to="/counter">Counter</Link>
      </div>
    );
  };

export default Home
