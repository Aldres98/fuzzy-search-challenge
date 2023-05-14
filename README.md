
# fuzzy-search-challenge
## What's done
I've decided to show a little bit of my thought process through PRs, which were merged into main. I've attached descriptions to all of them (some more detailed, than others). All in all, things, that are done:

 - First of all, I went through the provided algorithm to find out how it works
 - After that, I've refactored the code of algorithm a tiny bit, to make it more human-readable and provided comments, which were removed before for the sake of challenge.
 - Next, I actually used it (added a dropdown with search results) and tried to identify its drawbacks from the standpoint of user (e.g. What do I expect from a phonebook?)
 - After identifying main issues, I tried to find out something more useful in this user scenario (e.g. Should we maybe go with something easier like prefix tree? - But then we are only checking the prefixes, what if user has made a typo in the middle of his input?)
 - Assesed a couple of fuzzy search libraries out there, and sticked with the one with the most stars on Github (as for a real project we would want to use something, which is thoroughly tested and maintained) - it was Fuse.js and it has all capabilities we need

However, there's way more things I was considering, and which I would love to discuss during our call.

## How to run the app
`npm install`
`npm start`
