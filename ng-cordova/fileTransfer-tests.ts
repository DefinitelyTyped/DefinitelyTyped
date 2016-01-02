/// <reference path="tsd.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../cordova/cordova.d.ts" />

module ngCordova {
    'use strict';

    angular.module('test')
    // Adapted from http://ngcordova.com/docs/plugins/fileTransfer/
        .controller('MyCtrl', function($scope: ng.IScope & { downloadProgress: number; }, $timeout: ng.ITimeoutService, $cordovaFileTransfer: ngCordova.IFileTransferService) {

            document.addEventListener('deviceready', function() {

                var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
                var targetPath = cordova.file.documentsDirectory + "testImage.png";
                var trustHosts = true
                var options = {};

                $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                    .then(function(result) {
                        // Success!
                        var file: FileEntry = result;
                    }, function(err) {
                        // Error
                    }, function(progress) {
                        $timeout(function() {
                            $scope.downloadProgress = (progress.loaded / progress.total) * 100;
                        })
                    });

            }, false);


            document.addEventListener('deviceready', function() {

                var url = "http://cdn.wall-pix.net/uploads";
                var filePath = cordova.file.documentsDirectory + "testImage.png";
                var trustHosts = true
                var options = {};

                $cordovaFileTransfer.upload(url, filePath, options, trustHosts)
                    .then(function(result) {
                        // Success!
                        var file: FileUploadResult = result;
                    }, function(err) {
                        // Error
                    }, function(progress) {
                        // constant progress updates
                    });

            }, false);
        });
}
