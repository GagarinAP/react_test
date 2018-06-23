import React, { Component } from 'react';

const P = ({ value = 'empty' }) => <p><strong>{value}</strong></p>;

const Layout = (props) => {
		const { children } = props;
		return (
				<div className={'withBorder'}>
						<p>=======</p>
						{children}
						<p>=======</p>
				</div>
		);
};

// =========HOC===========
const HOC = BaseComponent => ({ list, color = 'green' }) => <div style={{ color }}><BaseComponent list={list}/></div>;

const renderList = ({ list }) =>
		<div>
				{list.map(el =>
						<div key={el}>
								<P value={el}/>
						</div>
				)}
		</div>;

const List = HOC(renderList);
// =========end HOC===========

class App extends Component {
		render() {
				return (
						<div className="main">
								<p>hello</p>
								<P value={'hello'}/>
								<Layout>
										<P value={'i am children'}/>
								</Layout>
								<List color={'red'} list={[ 1, 2, 3 ]}/>
								<List list={[ 1, 2, 3 ]}/>
						</div>
				);
		}
}

export default App;
