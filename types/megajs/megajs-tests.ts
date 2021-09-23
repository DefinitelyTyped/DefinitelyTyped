import mega from 'megajs';

// $ExpectType Storage
mega({ email: 'test@test.net', password: '1234' });

// tslint:disable-next-line no-duplicate-imports
import { Storage } from 'megajs';

const storage = new Storage({ email: 'test@test.net', password: '1234' });
const folder = storage.root.children[0];

folder.upload('myfile.txt', 'Hello world!', (error, uploadedFile) => {});

storage
    .on('add', file => {
        // File was added
        console.log(file.name);
    })
    .on('move', (file, oldDir) => {
        // File was moved
        console.log(file.name);
    });
