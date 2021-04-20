import * as tsv from 'tsv';

const { TSV, CSV, Parser } = tsv;

// Use built-in TSV parser
let original = `my   file   is
1   2   3`;
let data = TSV.parse(original);
if (TSV.stringify(data) !== original) {
    throw new Error('Data does not match');
}

// Use built-in TSV parser but from the original
data = tsv.parse(original);
if (tsv.stringify(data) !== original) {
    throw new Error('Data does not match');
}

// Use built-in CSV parser
original = `my,file,is
1,2,3`;
CSV.header = true;
data = CSV.parse(original);
if (CSV.stringify(data) !== original) {
    throw new Error('Data does not match');
}

// Use a custom parser
original = `my*file*is
1*2*3`;
const SSV = new Parser('*', { header: true });
data = SSV.parse(original);
if (SSV.stringify(data) !== original) {
    throw new Error('Data does not match');
}
