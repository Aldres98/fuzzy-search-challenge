import { useEffect, useState } from "react";
import "./App.css";
import { PhonebookEntry, PhonebookReferenceImplementation } from "./Phonebook";
import { PhonebookSamples } from "./PhonebookSamples";
import ResultsDropdown from "./components/ResultsDropdown";

const phonebook = new PhonebookReferenceImplementation(PhonebookSamples);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<PhonebookEntry[]>([]);

  useEffect(() => {
    setResults(phonebook.match(searchTerm));
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <input
            type="text"
            autoFocus
            className="input"
            placeholder="Type to search for phonebook entries"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <ResultsDropdown results={results} />
        </div>
      </header>
    </div>
  );
}

export default App;
