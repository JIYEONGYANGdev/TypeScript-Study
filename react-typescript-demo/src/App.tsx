import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Caroline',
    last: 'Polacheck',
  }

  const nameList = [
    {
      first: 'Caroline',
      last: 'Polacheck',
    },
    {
      first: 'Lauv',
      last: 'Kim',
    },
    {
      first: 'Yonpee',
      last: 'Kruhanabin',
    },
  ]

  return (
    <div className="App">
      <Greet name='JIYEONGYANGdev' todoUnchecked={5} isLoggedIn={true} />
      <Person names={personName} />
      <PersonList namesList={nameList} />
      <Status status={'error'} />
    </div>
  );
}

export default App;
