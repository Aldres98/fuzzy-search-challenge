/** Phone book entry with first & last name plus phone nunber */

import Fuse from "fuse.js";

export type PhonebookEntry = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export interface PhonebookInterface {
  match(term: string): PhonebookEntry[];
}

export class PhonebookImplementation implements PhonebookInterface {
  private fuse: Fuse<PhonebookEntry>;

  constructor(entries: PhonebookEntry[]) {
    this.fuse = new Fuse(entries, {
      keys: ["firstName", "lastName", "phoneNumber"],
      includeScore: true,
      threshold: 0.3,
      shouldSort: true,
    });
  }

  match(term: string): PhonebookEntry[] {
    return this.fuse.search(term).map((result) => result.item);
  }
}
