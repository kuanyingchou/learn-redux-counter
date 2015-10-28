import { createStore } from 'redux';

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