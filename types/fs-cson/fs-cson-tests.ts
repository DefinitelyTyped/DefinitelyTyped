import * as fsCson from 'fs-cson';

fsCson.register();

fsCson.readFile('sample.cson', (err, data) => {
  if (!err) {
    console.log(data);
  }
});

const data = fsCson.readFileSync('sample.cson');

function updater(data: any) {
  const result: any = {};
  for (const key in data) {
    const value = data[key];
    result[key] = value * 2;
  }
  result.c = 6;
  return result;
}

fsCson.updateFile('sample.cson', updater, (err) => {
  if (err) console.error(err);
});

fsCson.updateFileSync('sample.cson', updater);

fsCson.writeFile('sample.cson', { a: 1, b: 2 }, (err) => {
  if (err) console.error(err);
});

fsCson.writeFileSync('sample.cson', { a: 1, b: 2 });

fsCson.writeFileSafe('sample.cson', { a: 1, b: 2 }, (err) => {
  if (err) console.error(err);
});

fsCson.writeFileSafeSync('sample.cson', { a: 1, b: 2 });
