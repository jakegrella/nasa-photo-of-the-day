//React, hooks
import React, { useState, useEffect } from 'react';
//style
import './styles/App.css';
//axios
import axios from 'axios';
//constants
import { BASE_URL, API_KEY } from './constants/constants';
//components
import Header from './components/Header';
import PhotoOfDay from './components/PhotoOfDay';
// import PreviousPhotos from './components/PreviousPhotos';

function App() {
	//state
	const [currentDate, setCurrentDate] = useState([]);
	//effect hook
	useEffect(() => {
		const fetchPhoto = () => {
			axios
				.get(`${BASE_URL}?api_key=${API_KEY}`)
				.then((response) => {
					console.log('response', response);
					setCurrentDate(response.data);
				})
				.catch((error) => {
					console.dir(error);
				});
		};
		// fetchPhoto();
		console.log('fetch', fetchPhoto());
	}, []);

	return (
		<div className='App'>
			<Header date={currentDate.date} title={currentDate.title} />
			<PhotoOfDay
				imgSrc={currentDate.url}
				imgAlt={currentDate.title}
				description={currentDate.explanation}
				copyright={currentDate.copyright}
			/>
			{/* <PreviousPhotos /> */}
		</div>
	);
}

export default App;
