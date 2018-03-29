//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import HomePage from './containers/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
  	<div>
	  	<HomePage />
	  	<About />
	  	<Portfolio />
		<Footer />
	</div>
  </div>
);

export default App;
