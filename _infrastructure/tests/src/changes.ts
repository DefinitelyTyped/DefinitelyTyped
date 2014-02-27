/// <reference path="../_ref.d.ts" />

module DT {

    var fs = require('fs');
    var path = require('path');
    var Git = require('git-wrapper');

    export class GitChanges {

        options = [];

        constructor(public baseDir: string) {
            var dir = path.join(baseDir, '.git');
            if (!fs.existsSync(dir)) {
                throw new Error('cannot locate git-dir: ' + dir);
            }
            this.options['git-dir'] = dir;
        }

        getChanges(callback: (err, paths: string[]) => void): void {
            //git diff --name-only HEAD~1
            var git = new Git(this.options);
            var opts = {};
            var args = ['--name-only HEAD~1'];
            git.exec('diff', opts, args, (err, msg: string) => {
                if (err) {
                    callback(err, null);
                    return;
                }
                var paths = msg.replace(/^\s+/, '').replace(/\s+$/, '').split(/\r?\n/g);
                // console.log(paths);
                callback(null, paths);
            });
        }
    }
}
