import React  from 'react'
import {createStore} from 'redux';
import {actionStatus, action} from "./actions";
import myReducer from './reducers/index'


const store = createStore(myReducer);

store.dispatch(action());
store.dispatch(actionStatus(
{
        name: 'tung 2',
        age: 24
      }
));

console.log(store.getState());


