import { createStore } from 'redux';
import React, { Component } from 'react';
import { render } from 'react-dom';

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

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

class App extends Component {
	constructor(props) {
		super();
		this.state = { value: props.value };
	}

	render() {
		return (
			<div>
				<Display value={this.state.value} />
				<Control />
			</div>
		);
	}
}

class Display extends Component {
	render() {
		return (
			<div>
				{this.props.value}
			</div>
		);
	}	
}

class Control extends Component {
	render() {
		return (
			<div>
				<button>+
				</button>
				<button>-
				</button>
			</div>
		);
	}
}
render(
	<App value={0} />,
	document.getElementById('root')
);