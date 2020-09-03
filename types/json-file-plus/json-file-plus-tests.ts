import readJSON = require('json-file-plus');

const example = readJSON('test');
const syncExample = readJSON.sync('test');

example.then((file) => file.set({
    foo: 'bar'
}));

syncExample.set({
    foo: 'bar'
});
syncExample.get('foo');

example.then((file) => file.save().catch((err) => {
    throw err;
    })
);

syncExample.saveSync();
