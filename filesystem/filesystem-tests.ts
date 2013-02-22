/// <reference path="filesystem.d.ts" />
// http://www.w3.org/TR/file-system-api/

// 2. Introduction
declare function getAsText(file:File): void;
declare function writeDataToLogFile(fileWriter:FileWriterSync): void;

function useAsyncFS(fs:FileSystem):void {
  // see getAsText example in [FILE-API-ED].
  fs.root.getFile("already_there.txt", null, function (f:FileEntry): void{

    // In the example of the specification, there is a following code:
    // 
    //     getAsText(f.file());
    //
    // It seems wrong because f is ASYNCRONOUS file system.
    f.file(getAsText); 
    
  });

  // But now we can also write to the file; see [FILE-WRITER-ED].
  fs.root.getFile("logFile", {create: true}, function (f:FileEntry): void{
    f.createWriter(writeDataToLogFile);
  });
}
window.requestFileSystem(window.TEMPORARY, 1024 * 1024, function(fs:FileSystem): void{
  useAsyncFS(fs);
});

// In a worker:

var tempFS:FileSystemSync = window.requestFileSystemSync(window.TEMPORARY, 1024 * 1024);
var logFile:FileEntrySync = tempFS.root.getFile("logFile", {create: true});
var writer:FileWriterSync = logFile.createWriter();
writer.seek(writer.length);
writeDataToLogFile(writer);


// 5.2 The Flags dictionary
var fsSync:FileSystemSync = window.requestFileSystemSync(window.TEMPORARY, 1024 * 1024);
// Get the data directory, creating it if it doesn't exist.
var dataDir:DirectoryEntrySync = fsSync.root.getDirectory("data", {create: true});

// Create the lock file, if and only if it doesn't exist.
try {
  var lockFile:FileEntrySync = dataDir.getFile("lockfile.txt", {create: true, exclusive: true});
} catch (ex) {
  // It already exists, or something else went wrong.
}
