/** Phone book entry with first & last name plus phone nunber */

export type PhonebookEntry = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export interface PhonebookInterface {
  match(term: string): PhonebookEntry[];
}

export class PhonebookReferenceImplementation implements PhonebookInterface {
  private mapLastNameToEntries = new Map<string, [PhonebookEntry, number][]>();

  constructor(entries: PhonebookEntry[]) {
    /* Add all last name entries */
    for (const entry of entries)
      for (const [substring, weight] of this.getSubstringsWithWeight(
        entry.lastName
      )) {
        /* Get the existing entries for the substring */
        const existingEntries = this.mapLastNameToEntries.get(substring);
        // If no existing entries - put there a new array
        existingEntries
          ? existingEntries.push([entry, weight])
          : this.mapLastNameToEntries.set(substring, [[entry, weight]]);
      }
  }

  match(term: string): PhonebookEntry[] {
    /* Create a map to keep track of scores for each entry */
    const scoresMap = new Map<PhonebookEntry, number>();

    /* Iterate over all substrings with weight for the term */
    for (const [substring, weight] of this.getSubstringsWithWeight(term))
      for (const [entry, entryWeight] of this.mapLastNameToEntries.get(
        substring
      ) || []) {
        /* Calculate the score for this entry and substring */
        const score = weight * entryWeight;

        /* If this score is higher than the current score for this entry, update it */
        const existingScore = scoresMap.get(entry);
        if (!existingScore || existingScore < score)
          scoresMap.set(entry, score);
      }

    /* Sort the entries by score */
    const sortedEntries = [...scoresMap.entries()].sort((a, b) => b[1] - a[1]);
    return sortedEntries.map((entry) => entry[0]);
  }

  /** Generate substrings of a name by removing one character at a time and add weight */
  private getSubstringsWithWeight(name: string) {
    name = name.toLowerCase();
    const res: [string, number][] = [[name, 1]];

    /* Generate substrings by removing one character at a time */
    for (let i = 0; i < name.length; i++)
      res.push([name.substring(0, i) + name.substring(i + 1), 0.8]);

    return res;
  }
}
