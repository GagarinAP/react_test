import React from 'react';
import { withRouter } from 'react-router-dom';

const About = ({ match, location, history }) => {
		console.log(match)
		console.log(location)
		console.log(history)
		return (
				<div>About</div>
		);
};

export default withRouter(About);
