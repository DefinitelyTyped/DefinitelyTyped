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

        constructor(public baseDir: string, public filePathWithName: string) {
            var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
            this.dir = dirName.split('/')[0];
            this.file = path.basename(this.filePathWithName, '.ts');
            this.ext = path.extname(this.filePathWithName);
        }

        // From '/complete/path/to/file' to 'specfolder/specfile.d.ts'
        public get formatName(): string {
            var dirName = path.dirname(this.filePathWithName.substr(this.baseDir.length + 1)).replace('\\', '/');
            return this.dir + ((dirName.split('/').length > 1) ? '/-/' : '/') + this.file + this.ext;
        }
    }
}
