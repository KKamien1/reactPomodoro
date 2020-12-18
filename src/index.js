import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/main.scss"



import EditableTimebox from './components/EditableTimebox';
import TimeboxList from './components/TimeboxList';
import Error from './components/Error';











function App(params) {
  return (
    <>
      <Error message="Coś nie działa w całej aplikacji">
        <TimeboxList />, <EditableTimebox />
      </Error>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('App'));

