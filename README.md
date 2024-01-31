# Project Goals
Project that creates a SAP component that after two button clicks, a form may be filled for a
college member who may consist of faculty, staff, administration and college members. Once this
member is submitted, they will be added to the "card stacks" where members may be searched,
removed, and looked up via hashtables with an average runtime of O(1).

## Current goals: 
- [X] Modularize single JS file
  - [X] iconTray.js
  - [X] fromCreateUbiquity.js
  - [X] fromCreateFaculty.js
  - [X] dropDownDomMan.js
  - [X] dropDownLogic.js
  - [ ] dataStructures.js
- [ ] Utilize hashtable for quick insert, delete, and search features
- [ ] Add animations for cards
- [ ] Make card size responsize
- [ ] Make font-size responsize
- [X] Add delete entire card feature during form process (ere clicking submit)
- [ ] Resize class delete button
- [ ] Hook up logic to DOM manipulation

## Current Known Issues:
Potential memory leaks with addeventlistener.
