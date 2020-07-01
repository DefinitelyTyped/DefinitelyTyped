// Following are lifted from the samples on the NPM page, modified to pass
//  the linter

import * as jsonfile from 'jsonfile';

const file = '/tmp/data.json';
const obj = {name: 'JP'};

jsonfile.readFile(file, (err: NodeJS.ErrnoException | null, obj: any) => {
  console.dir(obj);
});

console.dir(jsonfile.readFileSync(file));

jsonfile.writeFile(file, obj, (err: NodeJS.ErrnoException) => {
  console.error(err);
});

jsonfile.writeFile(file, obj, {spaces: 2}, (err: NodeJS.ErrnoException) => {
  console.error(err);
});

jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\r\n'}, (err: NodeJS.ErrnoException) => {
  console.error(err);
});

jsonfile.writeFile(file, obj, {flag: 'a'}, (err: NodeJS.ErrnoException) => {
  console.error(err);
});

jsonfile.writeFileSync(file, obj);
jsonfile.writeFileSync(file, obj, {spaces: 2});
jsonfile.writeFileSync(file, obj, {spaces: 2, EOL: '\r\n'});
jsonfile.writeFileSync(file, obj, {flag: 'a'});
