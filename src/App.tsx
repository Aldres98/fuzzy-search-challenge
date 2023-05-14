import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { PhonebookEntry, PhonebookImplementation } from "./Phonebook";
import { PhonebookSamples } from "./PhonebookSamples";
import ResultsDropdown from "./components/ResultsDropdown";

const phonebook = new PhonebookImplementation(PhonebookSamples);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<PhonebookEntry[]>([]);
  const debouncedPhonebookSearch = useCallback(
    debounce((term: string) => setResults(phonebook.match(term)), 300, {
      trailing: true,
    }),
    []
  );

  useEffect(() => {
    debouncedPhonebookSearch(searchTerm);
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
