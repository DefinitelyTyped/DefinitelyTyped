import mega from 'megajs';

// $ExpectType Storage
mega({ email: 'test@test.net', password: '1234' });

// tslint:disable-next-line no-duplicate-imports
import { Storage } from 'megajs';

const storage = new Storage({ email: 'test@test.net', password: '1234' });

// $ExpectType MutableFile
const rootFolder = storage.root;
rootFolder.upload('hello-world.txt', Buffer.from('hello world'));

storage.on('add', file => {
    // File was added
    console.log(file.name);
});
