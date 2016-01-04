/// <reference path="ng-file-upload.d.ts" />

module controllers {

    "use strict";

    var controllerId = "upload";

    class Upload {

        static $inject = ["$upload"];
        constructor(
            private $upload: angular.angularFileUpload.IUploadService
            ) {
        }

        onFileSelect($files: File[]) {
            // $files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                var file = $files[i];
	            this.$upload.upload({
			        url: "/api/upload",
			        method: "POST",
			        data: {
				        extraData: {
					        fileName: file.name,
					        test: "anything"
				        }
			        },
			        file: file
		        })
                .abort()
                .xhr((evt: any) => {
                    console.log('xhr');
                })
		        .progress((evt: angular.angularFileUpload.IFileProgressEvent) => {
			        var percent = parseInt((100.0 * evt.loaded / evt.total).toString(), 10);
			        console.log("upload progress: " + percent + "% for " + evt.config.file.name);
		        })
		        .error((data: any, status: number, response: any, headers: any) => {
			        console.error(data, status, response, headers);
		        })
				.success((data: any, status: number, headers: any, config: angular.angularFileUpload.IFileUploadConfigFile) => {
			        // file is uploaded successfully
					console.log("Success!", data, status, headers, config);
		        });

            }
        }
    }

    angular.module("app").controller(controllerId, Upload);
}
