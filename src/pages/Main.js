import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import PropTypes from 'prop-types';

// import axios from 'axios';
// import $ from 'jquery';
// window.$ = $;

function Main() {
  return (
    <div className="main">
      <h1>Main</h1>
      <Link to='/lifecycle'>lifeCycle</Link>
    </div>
  );
}

export default Main;
