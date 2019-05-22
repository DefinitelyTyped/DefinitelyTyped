import * as dir from "node-dir";

// display contents of files in this script's directory
dir.readFiles("./",
    function(err, content, next) {
        console.log('content:', content);
        next();
    },
    function(err, files) {
        console.log('finished reading files:', files);
    });

// display contents of huge files in this script's directory
dir.readFilesStream("./",
    function(err: any, stream: any, next: any) {
        var content = '';
        stream.on('data', function(buffer: any) {
            content += buffer.toString();
        });
        stream.on('end',function() {
            console.log('content:', content);
            next();
        });
    },
    function(err, files) {
        console.log('finished reading files:', files);
    });

// match only filenames with a .txt extension and that don't start with a `.´
dir.readFiles("./", {
    match: /.txt$/,
    exclude: /^\./
    }, function(err, content, next) {
        console.log('content:', content);
        next();
    },
    function(err, files){
        console.log('finished reading files:',files);
    });

// exclude an array of subdirectory names
dir.readFiles("./", {
    exclude: ['node_modules', 'test']
    }, function(err, content, next) {
        console.log('content:', content);
        next();
    },
    function(err, files){
        console.log('finished reading files:',files);
    });


// the callback for each file can optionally have a filename argument as its 3rd parameter
// and the finishedCallback argument is optional, e.g.
dir.readFiles("./", function(err: any, content: any, filename: string, next: any) {
    console.log('processing content of file', filename);
    next();
});

dir.files("./", function(err, files) {
    console.log(files);
});

dir.files("./", function(err, files) {
    // sort descending
    files.reverse();
    // include only certain filenames
    files = files.filter(function(file: any) {
       return ['allowed', 'file', 'names'].indexOf(file) > -1;
    });
    // exclude some filenames
    files = files.filter(function(file: any) {
        return ['exclude', 'these', 'files'].indexOf(file) === -1;
    });
});

dir.files("./", { sync: true }).map(file => console.log(file.toLowerCase()));

dir.promiseFiles("./")
    .then(files => {
        console.log(files);
    })
    .catch(e => console.error(e));

dir.subdirs("./", function(err, subdirs) {
    console.log(subdirs);
});

dir.paths("./", function(err, paths) {
    console.log('files:\n', paths.files);
    console.log('subdirs:\n', paths.dirs);
});

dir.paths("./", true, function(err, paths) {
    console.log('paths:\n', paths);
});
