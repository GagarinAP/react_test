import React from 'react';

export const Profile = ({ match, location, history }) => {
		console.log(match)
		console.log(location)
		console.log(history)
		return (
				<div>
						<div><strong>I dont see dynamic routes!!!</strong></div>
						<div>You are now at {location.pathname}</div>
						<div>Profile <strong>{match.params.id}</strong></div>
				</div>
		);
};

export const ProfileRandom = ({ match, location, history }) => {
		console.log(match)
		console.log(location)
		console.log(history)
		return (
				<div>
						<div>You are now at {location.pathname}</div>
						<div>Profile <strong>{match.params.id}</strong></div>
				</div>
		);
};

export const Search = ({ match, location, history }) => {
		console.log(match)
		console.log(location)
		console.log(history)
		return (
				<div>
						<div>You are now at {location.pathname}</div>
						<div>Search <strong>{location.search}</strong></div>
				</div>
		);
};
