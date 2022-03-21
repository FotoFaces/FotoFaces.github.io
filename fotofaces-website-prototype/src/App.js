import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/nav';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
		<Router>
			<Nav />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/documentation' exact element={<Documentation />} />
				<Route path='/team' exact element={<Team />} />
			</Routes>
		</Router>
	</div>
  );
}

export default App;
