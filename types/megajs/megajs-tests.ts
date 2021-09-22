import mega from 'megajs';

// $ExpectType Storage
mega({ email: 'test@test.net', password: '1234' });

// tslint:disable-next-line no-duplicate-imports
import { Storage } from 'megajs';

const storage = new Storage({ email: 'test@test.net', password: '1234' });
// $ExpectType MutableFile
const folder = storage.root.children[0] // the first file in the root of the storage

folder.upload('myfile.txt', 'Hello world!', (error, uploadedFile) => {});

storage
    .on('add', file => {
        // File Added
        console.log(file.name);
    })
    .on('move', (file, olddir) => {
        // File moved to a different directory
        console.log(file.children, olddir.children);
    })
    .on('delete', file => {
        // File Deleted
        console.log(file.name);
    })
    .on('update', file => {
        // File updated
        console.log(file.name);
    });
