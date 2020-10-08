//React, hooks
import React, { useState, useEffect } from 'react';
//style
import './App.css';
//axios
import axios from 'axios';
//constants
import { BASE_URL, API_KEY } from './constants/constants';
//components
import Header from './components/Header';
import PhotoOfDay from './components/PhotoOfDay';
import PreviousPhotos from './components/PreviousPhotos';

function App() {
	//state
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
			<Header />
			<PhotoOfDay
				date={date.date}
				title={date.title}
				imgSrc={date.url}
				imgAlt={date.title}
				description={date.explanation}
				copyright={date.copyright}
			/>
			<PreviousPhotos />
		</div>
	);
}

export default App;
