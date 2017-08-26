import * as table from 'table';

const border: table.JoinStruct = table.getBorderCharacters('norc');

const data = [
  ['first name', 'last name'],
  ['jane', 'doe'],
  ['john', 'doe']
];

const config: table.TableUserConfig = { border };

table.table(data, config);
