import { harmonBinary, Select } from 'harmon';

const select1: Select = { func: () => {}, query: 'query1' };
const select2: Select = { func: () => {}, query: 'query2' };
const selects = [select1, select2];

harmonBinary(selects, selects, true);
