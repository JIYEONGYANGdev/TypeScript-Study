import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/state/Counter';
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
      <br/>
      <Status status={'error'} />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <br/>
      <Button handleClick={(event, id) => console.log('button clicked', event, id)}/>
      <Input value='' handleChange={event => console.log(event)}/>
      <Container styles={{border:'1px dashed blue', padding: '1rem', margin: '2rem'}}/>
      <Counter/>
      <br/>
      <ThemeContextProvider><Box /></ThemeContextProvider>
      
    </div>
  );
}

export default App;
