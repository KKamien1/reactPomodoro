import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/main.scss"



import EditableTimebox from './components/EditableTimebox';
import TimeboxList from './components/TimeboxList';











function App(params) {
  return [<TimeboxList />, <EditableTimebox />];
}
ReactDOM.render(<App />, document.getElementById('App'));

