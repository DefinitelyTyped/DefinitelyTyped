import { directoryAsync, directory, file, root } from 'tempy';

//

directoryAsync().then((tempDir1: string) => console.log(tempDir1));

const tempDir2: string = directory();

const tempFile: string = file();
const pngFile: string = file({extension: 'png'});

const tmpRoot: string = root;
