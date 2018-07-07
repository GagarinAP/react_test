import React from 'react';
import {
		NavLink,
		Link
} from 'react-router-dom';

const Header = () => (
		<nav className="navbar navbar-light bg-light">
				<div className="container">
						<Link className="navbar-brand" to="/">Navbar</Link>
						<ul className="nav nav-pills">
								<li className="nav-item">
										<NavLink className="nav-link" activeClassName='active' to="/about">About</NavLink>
								</li>
								<li className="nav-item">
										<NavLink className="nav-link" activeClassName='active' to="/profile">Profile</NavLink>
								</li>
						</ul>
				</div>
		</nav>
);

const Footer = () => (
		<footer className="footer">
				<div className="container">
						<span className="text-muted">
								<strong>2018</strong> Place sticky footer content here.
						</span>
				</div>
		</footer>
);

const Layout = (props) => {
		const { children } = props;
		return (
				<div
						className="container"
						style={{
								backgroundColor: '#fff',
								padding: '1vh',
								marginTop: '1vh',
								marginBottom: '1vh',
								height: '98vh',
								boxShadow: '2px 2px 5px'
						}}>
						<div className="row no-gutters" style={{
								position: 'relative',
								minHeight: '96vh'
						}}>
								<div className="col-md-12" style={{
										position: 'absolute',
										top: 0
								}}>
										<Header/>
								</div>
								<div className="col-md-12" style={{
										position: 'absolute',
										top: 'calc(1vh + 60px)',
										height: '84vh'
								}}>
										{children}
								</div>
								<div className="col-md-12" style={{
										position: 'absolute',
										bottom: 0
								}}>
										<Footer/>
								</div>
						</div>
				</div>
		);
};

export default Layout;
