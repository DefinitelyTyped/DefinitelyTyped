import { directory, file, root } from "tempy";

//

const tempDir2: string = directory();

const tempFile: string = file();
const pngFile: string = file({ extension: "png" });

const fileWithName: string = file({ name: "afile.txt" });

const tmpRoot: string = root;
