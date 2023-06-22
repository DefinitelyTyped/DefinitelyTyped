import FileManager = require('file-manager');

const manager1 = new FileManager('/foo/bar');
const manager2 = new FileManager(null);

manager1
    .saveFile('foo.txt', 'Hello World')
    .then(() => {})
    .catch(() => {});
manager1
    .writeFile('foo.txt', 'Hello World')
    .then(() => {})
    .catch(() => {});

const onlyTakesBooleans = (test: boolean) => {};
onlyTakesBooleans(manager1.isEnabled());

manager1
    .saveFiles({
        'foo.txt': 'Hello World',
        'bar.txt': Buffer.from('fooooooo'),
    })
    .then(() => {})
    .catch(() => {});
manager1
    .saveFiles({
        'foo.txt': 'Hello World',
        'bar.txt': Buffer.from('baaaaaar'),
    })
    .then(() => {})
    .catch(() => {});

manager1
    .readFile('foo.txt')
    .then(buf => {
        console.log(buf.byteLength);
    })
    .catch(() => {});

manager1
    .readFiles(['foo.txt', 'bar.txt'])
    .then(files => {
        files.map(file => {
            console.log(file.filename.charAt(0));
            if (file.contents) {
                console.log(file.contents.byteLength);
            }
            if (file.error) {
                console.log(file.error);
            }
        });
    })
    .catch(() => {});

manager1.on('read', (filename, callback) => {
    console.log(filename.charAt(0));

    callback(null, Buffer.from('Hello World'));
    callback(new Error('foo'));
});

manager1.on('save', (filename, contents, callback) => {
    console.log(filename.charAt(0));
    console.log(contents.byteLength);

    callback(null);
    callback(new Error('foo'));
});

manager1.directory = '🤔';
console.log(manager1.directory.charAt(0));
