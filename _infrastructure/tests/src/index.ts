/// <reference path="../_ref.d.ts" />
/// <reference path="../runner.ts" />
/// <reference path="util.ts" />

module DT {
    var fs = require('fs');
    var path = require('path');

    export class FileIndex {

        fileMap: {[path:string]:File};

        constructor(public options: ITestRunnerOptions) {

        }

        parseFiles(files: File[], callback: () => void): void {
            this.fileMap = Object.create(null);
            files.forEach((file) => {
                this.fileMap[file.fullPath] = file;
            });
            this.loadReferences(files, () => {
                callback();
            });
        }

        private loadReferences(files: File[], callback: () => void): void {
            var queue = files.slice(0);
            var active = [];
            var max = 50;
            var next = () => {
                if (queue.length === 0 && active.length === 0) {
                    callback();
                    return;
                }
                // queue paralel
                while (queue.length > 0 && active.length < max) {
                    var file = queue.pop();
                    active.push(file);
                    this.parseFile(file, (file) => {
                        active.splice(active.indexOf(file), 1);
                        next();
                    });
                }
            };
            process.nextTick(next);
        }

        private parseFile(file: File, callback: (file: File) => void): void {
            fs.readFile(file.filePathWithName, {
                encoding: 'utf8',
                flag: 'r'
            }, (err, content) => {
                if (err) {
                    // just blow up?
                    throw err;
                }
                // console.log('----');
                // console.log(file.filePathWithName);

                file.references = extractReferenceTags(content).map((ref: string) => {
                    return path.resolve(path.dirname(file.fullPath), ref);
                }).reduce((memo: File[], ref: string) => {
                    if (ref in this.fileMap) {
                        memo.push(this.fileMap[ref]);
                    }
                    else {
                        console.log('not mapped? -> ' + ref);
                    }
                    return memo;
                }, []);

                // console.log(file.references);

                callback(file);
            });
        }
    }
}
