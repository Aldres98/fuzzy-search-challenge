import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import { PhonebookEntry, PhonebookInterface } from "../Phonebook";

export const useSearch = (phonebook: PhonebookInterface) => {
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

  useEffect(() => {
    const debouncedSearch = debounce((term: string) => {
      setResults(phonebook.match(term));
    }, 300);
    debouncedSearch(searchTerm);
  }, [searchTerm, phonebook]);

  return { searchTerm, setSearchTerm, results };
};
