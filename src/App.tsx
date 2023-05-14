import "./App.css";
import { PhonebookImplementation } from "./Phonebook";
import { PhonebookSamples } from "./PhonebookSamples";
import ResultsDropdown from "./components/ResultsDropdown";
import { useSearch } from "./helpers/useSearch";
import SearchInput from "./components/SearchInput";

const phonebook = new PhonebookImplementation(PhonebookSamples);

function App() {
  const { searchTerm, setSearchTerm, results } = useSearch(phonebook);

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-container">
          <SearchInput
            className="input"
            placeholder="Type to search for phonebook entries"
            value={searchTerm}
            onChange={setSearchTerm}
          />
          <ResultsDropdown results={results} />
        </div>
      </header>
    </div>
  );
}

export default App;
