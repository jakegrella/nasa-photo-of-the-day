//React, hooks
import React, { useState, useEffect } from 'react';
//style
import './App.css';
//axios
import axios from 'axios';
//constants
import { BASE_URL, API_KEY } from './constants/constants';

function App() {
	//state
	// const [dates, setDates] = useState('');
	const [date, setDate] = useState([]);

	// console.log('first log', dates);
	// effect hook
	// useEffect(() => {
	// 	const fetchPhoto = () => {
	// 		axios
	// 			.get(
	// 				`${BASE_URL}?start_date=${dates}&end_date=${dates}&api_key=${API_KEY}`
	// 			)
	// 			.then((response) => {
	// 				// setDates(response.data);
	// 			})
	// 			.catch((error) => {
	// 				console.dir(error);
	// 			});
	// 	};
	// 	fetchPhoto();
	// });
	// console.log('second log', dates);
	useEffect(() => {
		const fetchPhoto = () => {
			axios
				.get(`${BASE_URL}?api_key=${API_KEY}`)
				.then((response) => {
					setDate(response.data);
				})
				.catch((error) => {
					console.dir(error);
				});
		};
		console.log(fetchPhoto());
		fetchPhoto();
	}, []);

	return (
		<div className='App'>
			<h1>{date.title}</h1>
			<img src={date.url} alt='space' />
		</div>
	);
}

export default App;
