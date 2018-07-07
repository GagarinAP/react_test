import React from 'react';
import {
		BrowserRouter as Router,
		Switch,
		Route
} from 'react-router-dom';
import {
		Home,
		About,
		Profile,
		Layout
} from './pages';

const App = () => (
		<Router>
				<Switch>
						<Layout>
								<Route exact path='/' component={Home}/>
								<Route exact path='/about' component={About}/>
								<Route exact path='/profile' component={Profile}/>
						</Layout>
				</Switch>
		</Router>
);

export default App;
