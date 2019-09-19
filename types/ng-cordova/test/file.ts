namespace ngCordova {
    'use strict';


    angular.module('test')
    // Adapted from http://ngcordova.com/docs/plugins/file/
        .controller('MyCtrl', function($scope: ng.IScope, $cordovaFile: ngCordova.IFileService) {

            document.addEventListener('deviceready', function() {

                $cordovaFile.getFreeDiskSpace()
                    .then(function(success) {
                        // success in kilobytes
                        var freeSpace: number = success;
                    }, function(error) {
                        // error
                    });


                // CHECK
                $cordovaFile.checkDir(cordova.file.dataDirectory, "dir/other_dir")
                    .then(function(success) {
                        // success
                        var dir: DirectoryEntry = success;
                    }, function(error) {
                        // error
                    });


                $cordovaFile.checkFile(cordova.file.dataDirectory, "some_file.txt")
                    .then(function(success) {
                        // success
                        var fileResult: FileEntry = success;
                    }, function(error) {
                        // error
                    });


                // CREATE
                $cordovaFile.createDir(cordova.file.dataDirectory, "new_dir", false)
                    .then(function(success) {
                        // success
                        var dir: DirectoryEntry = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.createFile(cordova.file.dataDirectory, "new_file.txt", true)
                    .then(function(success) {
                        // success
                        var fileResult: FileEntry = success;
                    }, function(error) {
                        // error
                    });


                // REMOVE
                $cordovaFile.removeDir(cordova.file.dataDirectory, "some_dir")
                    .then(function(success) {
                        // success
                        if (success.success) {
                            var dirResult: DirectoryEntry = success.fileRemoved;
                        }
                    }, function(error) {
                        // error
                    });

                $cordovaFile.removeFile(cordova.file.dataDirectory, "some_file.txt")
                    .then(function(success) {
                        // success
                        if (success.success) {
                            var fileResult: FileEntry = success.fileRemoved;
                        }
                    }, function(error) {
                        // error
                    });

                $cordovaFile.removeRecursively(cordova.file.dataDirectory, "")
                    .then(function(success) {
                        // success
                        if (success.success) {
                            var dirResult: DirectoryEntry = success.fileRemoved;
                        }
                    }, function(error) {
                        // error
                    });


                // WRITE
                $cordovaFile.writeFile(cordova.file.dataDirectory, "file.txt", "text", true)
                    .then(function(success) {
                        // success
                        var endEvent: ProgressEvent = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.writeExistingFile(cordova.file.dataDirectory, "file.txt", "text")
                    .then(function(success) {
                        // success
                        var endEvent: ProgressEvent = success;
                    }, function(error) {
                        // error
                    });


                // READ
                $cordovaFile.readAsText(cordova.file.dataDirectory, "file.txt")
                    .then(function(success) {
                        // success
                        var text: string = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.readAsDataURL(cordova.file.dataDirectory, "file.txt")
                    .then(function(success) {
                        // success
                        var text: string = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.readAsBinaryString(cordova.file.dataDirectory, "file.txt")
                    .then(function(success) {
                        // success
                        var text: string = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.readAsArrayBuffer(cordova.file.dataDirectory, "file.txt")
                    .then(function(success) {
                        // success
                        var buffer: ArrayBuffer = success;
                    }, function(error) {
                        // error
                    });


                // MOVE
                $cordovaFile.moveDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function(success) {
                        // success
                        var dirResult: DirectoryEntry = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.moveFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory)
                    .then(function(success) {
                        // success
                        var fileResult: FileEntry = success;
                    }, function(error) {
                        // error
                    });


                // COPY
                $cordovaFile.copyDir(cordova.file.dataDirectory, "dir", cordova.file.tempDirectory, "new_dir")
                    .then(function(success) {
                        // success
                        var dirResult: DirectoryEntry = success;
                    }, function(error) {
                        // error
                    });

                $cordovaFile.copyFile(cordova.file.dataDirectory, "file.txt", cordova.file.tempDirectory, "new_file.txt")
                    .then(function(success) {
                        // success
                        var fileResult: FileEntry = success;
                    }, function(error) {
                        // error
                    });


            });

        });
}
