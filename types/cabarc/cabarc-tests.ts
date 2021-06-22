import { Archive, Cabinet } from 'cabarc';

const cab = new Archive();
cab.open('path/to/filename.cab', error => {
    if (error) {
        throw error;
    }

    if (cab.header.signature !== Cabinet.SIGNATURE) {
        throw new Error('Signature mismatch');
    }
    if (cab.header.fileCount <= 0 || cab.header.folderCount <= 0) {
        throw new Error('Empty archive');
    }

    cab.readFile(cab.files[0].name, (error, buffer) => {
        if (error) {
            throw error;
        }
        console.log('Read file', buffer.toString());
        cab.close(() => console.log('Done'));
    });
});
