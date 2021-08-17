import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExerciseOne from './ExerciseOne';
import ExerciseTwo from './ExerciseTwo';


ReactDOM.render(
	<React.StrictMode>
		<ExerciseOne />
		<ExerciseTwo />
	</React.StrictMode>,
	document.getElementById('root')
);