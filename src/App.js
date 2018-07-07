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
		ProfileRandom,
		Layout,
		Search
} from './pages';

const App = () => (
		<Router>
				<Switch>
						<Layout>
								<Route exact path='/' component={Home}/>
								<Route path='/about' component={About}/>
								<Route exact path='/profile' component={Profile}/>
								<Route path='/profile/:id' component={ProfileRandom}/>
								<Route path='/search' component={Search}/>
						</Layout>
				</Switch>
		</Router>
);

export default App;
