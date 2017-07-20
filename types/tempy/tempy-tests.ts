import { directoryAsync, directory, file, root } from 'tempy';

//

(async () => {
    const tempDir1: string = await directoryAsync();
})();

const tempDir2: string = directory();

const tempFile: string = file();
const pngFile: string = file({extension: 'png'});

const tmpRoot: string = root;
