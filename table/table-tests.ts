
import table from 'table';

const border = table.getBorderCharacters('norc');

const data = [
  ['first name', 'last name'],
  ['jane', 'doe'],
  ['john', 'doe']
];

const config = {
  border: border
};

console.log(table.table(data, config));
