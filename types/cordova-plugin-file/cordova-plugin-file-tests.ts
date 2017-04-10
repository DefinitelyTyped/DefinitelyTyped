/// <reference types="cordova"/>

function fsaccessor(fs: FileSystem) {
    console.log('FS root is: ' + fs.root.name);
    var fsreader: DirectoryReader = fs.root.createReader();
    fsreader.readEntries(
        (entries: Entry[]) => { console.log(fs.root.name + ' has ' + entries.length + ' child elements'); },
        (err: FileError)=> { alert('Error: ' + err.code); });
}

window.requestFileSystem(
    LocalFileSystem.TEMPORARY,
    1024 * 1024 * 5,
    fsaccessor,
    (err: FileError) => { alert('Error: ' + err.code); }
);

window.requestFileSystem(
    LocalFileSystem.PERSISTENT,
    1024 * 1024 * 5,
    fsaccessor,
    (err: FileError) => { alert('Error: ' + err.code); }
);

window.resolveLocalFileSystemURI(cordova.file.applicationDirectory,
    (entry: Entry)=> {
        if (entry.isDirectory) {
            console.log('successfully resolved ' + entry.fullPath + 'directory');
            console.log(entry.toURL());
            console.log(entry.toInternalURL());
        } else {
            var fentry = <FileEntry>entry;
            fentry.file((f: File) => { console.log(f.slice(f.size - 10, f.size)); });
            fentry.createWriter((writer: FileWriter)=> {
                if (writer.readyState == FileWriter.INIT) {
                    console.log('Init FileWriter');
                    writer.write(new Blob(['sdfdsfsdf']));
                    writer.onprogress = function(ev: ProgressEvent) {
                        console.log('Writing ' + ev.target);
                    };
                }
            });
        }
    },
    (error: FileError) => { console.log(error.code); }
);