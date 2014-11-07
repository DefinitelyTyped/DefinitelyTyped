/// <reference path="angular-file-upload.d.ts" />

module controllers {

    "use strict";

    var controllerId = "upload";

    class Upload {

        static $inject = ["$upload"];
        constructor(
            private $upload: ng.angularFileUpload.IUploadService
            ) {
        }

        onFileSelect($files: File[]) {
            //$files: an array of files selected, each file has name, size, and type.
            var uploads: ng.IPromise<any>[] = [];
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
                uploads.push(this.$upload.upload<any>({
                    url: "/api/upload",
                    method: "POST",
                    data: {
                        extraData: {
                            fileName: file.name, test: "anything"
                        }
                    },
                    file: file
                })
                .progress((evt: any) => {
                    console.log('progress');
                })
                .then(success => {
                    // file is uploaded successfully
                    console.log(success.data);
                })
                .catch(err => {
                    console.error(err);
                }));
            }
        }
    }

    angular.module("app").controller(controllerId, Upload);
}
