import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onChangeData } from './HomeReducer';

const Home = ({ match, location, history, data, onChangeData }) => (
		<div>
				<h1>Im from state in home <strong>{data}</strong></h1>
				<input type="text" onChange={e => onChangeData(e.target.value)}/>
		</div>
);

const mapStateToProps = (state) => ({
		data: state.home.data
});

const mapDispatchToProps = { onChangeData };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
