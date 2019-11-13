import React from 'react';
// import logo from './logo.svg';
import Exercices from './components/Exercices';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Servcies from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
	const exercicesLinks = [
		{
			title: 'Python',
			link: '/img/exercices/python-logo.png'
		},
		{
			title: 'C#',
			link: '/img/exercices/csharp-logo.png'
		},
		{
			title: 'PHP',
			link: '/img/exercices/php-logo.png'
		},
		{
			title: 'Java',
			link: '/img/exercices/java-logo.png'
		},
		{
			title: 'Javascript',
			link: '/img/exercices/javascript-logo.png'
		},
		{
			title: 'Ruby',
			link: '/img/exercices/ruby-logo.png'
		}
  ];
  
	return (
		<div className="App">
      <Navbar />

      <Header />

      <Servcies />

			<Exercices exercicesLinks={ exercicesLinks } />

			<About />

      <Contact />
		</div>
	);
}

export default App;
