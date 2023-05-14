import React from 'react';
import './App.css';
import { PhonebookReferenceImplementation } from './Phonebook';
import { PhonebookSamples } from './PhonebookSamples';


const phonebook = new PhonebookReferenceImplementation(PhonebookSamples);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='input-container'>
          <input type='text' autoFocus className="input" placeholder='Type to search for phonebook entries'/>
        </div>
      </header>
    </div>
  );
}

export default App;
