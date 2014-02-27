module DT {
    var path = require('path');

    /////////////////////////////////
    // Given a document root + ts file pattern this class returns:
    //         all the TS files OR just tests OR just definition files
    /////////////////////////////////
    export class File {
        dir: string;
        file: string;
        ext: string;
        references: File[] = [];

        constructor(public baseDir: string, public filePathWithName: string) {
            this.ext = path.extname(this.filePathWithName);
            this.file = path.basename(this.filePathWithName, this.ext);
            this.dir = path.dirname(this.filePathWithName);
        }

        // From '/complete/path/to/file' to 'specfolder/specfile.d.ts'
        public get formatName(): string {
            return path.join(this.dir, this.file + this.ext);
        }

        public get fullPath(): string {
            return path.join(this.baseDir, this.dir, this.file + this.ext);
        }

        toString() {
            return '[File ' + this.filePathWithName + ']';
        }
    }
}
