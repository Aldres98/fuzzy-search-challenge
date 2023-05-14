import { FunctionComponent } from "react";
import { PhonebookEntry } from "../Phonebook";

interface ResultsDropdownProps {
  results: PhonebookEntry[];
}

const ResultsDropdown: FunctionComponent<ResultsDropdownProps> = ({
  results,
}) => {
  return (
    <div className="dropdown-container">
      {results.length > 0 && (
        <div className="dropdown-list">
          {results.map((entry, index) => (
            <div key={index} className="dropdown-item">
              {entry.firstName} {entry.lastName} - {entry.phoneNumber}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ResultsDropdown;
