import mega from 'megajs';

// $ExpectType Storage
mega({ email: 'test@test.net', password: '1234' });

// tslint:disable-next-line no-duplicate-imports
import { Storage } from 'megajs';

const storage = new Storage({ email: 'test@test.net', password: '1234' });
//
storage.root.upload('hello-world.txt', Buffer.from('hello world'));
storage
    .on('add', file => {
        // File was added
        console.log(file.name);
    })
    .on('move', (file, oldDir) => {
        // File was moved
        console.log(file.name);
    });
