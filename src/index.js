import { createStore } from 'redux';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';

function counter(state = 0, action) {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
			break;
		case 'DECREMENT':
			return state - 1;
			break;
		default:
			return state;
			break;
	}
}

let store = createStore(counter);

store.subscribe(()=>
	console.log(store.getState()));

// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'DECREMENT'});
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'INCREMENT'});

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const {dispatch, value} = this.props;
		return (
			<div>
				<Display value={value} />
				<Control 
						handleIncrement={
							(e)=> {
								dispatch({type: 'INCREMENT'}); 
								console.log('+');
							}
						} 
						handleDecrement={
							(e)=>{
								dispatch({type: 'DECREMENT'}); 
								console.log('-');
							}
						}
				/>
			</div>
		);
	}
}

class Display extends Component {
	render() {
		return (
			<h1>
				{this.props.value}
			</h1>
		);
	}	
}

class Control extends Component {
	render() {
		return (
			<div>
				<button onClick={ this.props.handleIncrement }>
				+
				</button>
				<button onClick={ this.props.handleDecrement }>
				-
				</button>
			</div>
		);
	}
}

function select(state) {
	return {value: state};
}

let A = connect(select)(App);

render(
	<Provider store={store}>
		<A />
	</Provider>,
	document.getElementById('root')
);