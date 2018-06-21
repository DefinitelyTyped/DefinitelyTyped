import matchSorter, {rankings, caseRankings} from 'match-sorter'

const matchSorter = require('match-sorter')
// ES6 imports work too
// Also available in global environment via `matchSorter` global
const list = ['hi', 'hey', 'hello', 'sup', 'yo']
matchSorter(list, 'h') // ['hi', 'hey', 'hello']
matchSorter(list, 'y') // ['yo', 'hey']
matchSorter(list, 'z') // []




const objList = [
  {name: 'Janice', color: 'Green'},
  {name: 'Fred', color: 'Orange'},
  {name: 'George', color: 'Blue'},
  {name: 'Jen', color: 'Red'},
]
matchSorter(objList, 'g', {keys: ['name', 'color']})
// [{name: 'George', color: 'Blue'}, {name: 'Janice', color: 'Green'}, {name: 'Fred', color: 'Orange'}]

matchSorter(objList, 're', {keys: ['color', 'name']})
// [{name: 'Jen', color: 'Red'}, {name: 'Janice', color: 'Green'}, {name: 'Fred', color: 'Orange'}, {name: 'George', color: 'Blue'}]