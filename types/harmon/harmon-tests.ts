import * as harmonBinary from "harmon";
type Select = harmonBinary.Select;

const select1: Select = { func: () => {}, query: "query1" };
const select2: Select = { func: () => {}, query: "query2" };
const selects = [select1, select2];

harmonBinary(selects, selects, true);
