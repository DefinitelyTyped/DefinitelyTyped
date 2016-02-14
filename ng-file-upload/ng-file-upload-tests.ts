﻿/// <reference path="ng-file-upload.d.ts" />

"use strict";

let controllerId = "upload";

class UploadController {
	static $inject = ["Upload"];

	constructor(private Upload: angular.angularFileUpload.IUploadService) {
		this.Upload.setDefaults({
			ngfAccept: "image/*",
			ngfAllowDir: true,
			ngfEnableFirefoxPaste: true,
			ngfHideOnDropNotAvailable: true,
			ngfMaxDuration: 20,
			ngfMaxFiles: 10,
			ngfMaxSize: "10MB",
			ngfMaxTotalSize: "10MB",
			ngfMinDuration: "10s",
			ngfMinRatio: "8:10,1.6",
			ngfMinSize: "9MB",
			ngfMultiple: true,
			ngfRatio: "8:10,1.6",
			ngfStopPropagation: true,
			ngfValidateForce: true
		});
	}
	
	onFileSelect(files: Array<File>) {

		this.Upload
			.upload({
				url: "/api/upload",
				method: "POST",
				data: {
					media: files,
					extraData: {
						test: true
					}
				}
			}).abort().xhr((evt: any) => {
				console.log("xhr");
			}).progress((evt: angular.angularFileUpload.IFileProgressEvent) => {
				let percent = parseInt((100.0 * evt.loaded / evt.total).toString(), 10);
				console.log("upload progress: " + percent + "% for " + evt.config.data.media[0]);
			}).error((data: any, status: number, response: any, headers: any) => {
				console.error(data, status, response, headers);
			}).success((data: any, status: number, headers: any, config: angular.angularFileUpload.IFileUploadConfigFile) => {
				// file is uploaded successfully
				console.log("Success!", data, status, headers, config);
			});

		this.Upload
			.base64DataUrl(files[0])
			.then((file: string) => {
				console.log(file);
			})

		this.Upload
			.dataUrl(files[0], true)
			.then((result: string) => {
				console.log(result);
			});

		this.Upload
			.imageDimensions(files[0])
			.then((imageDimensions) => {
				console.log(imageDimensions.height + " " + imageDimensions.width);
			});

		this.Upload.isResizeSupported();
		this.Upload.isResumeSupported();
		this.Upload.isUploadInProgress();
		
		let json = this.Upload.json({ test: true }),
			jsonBlob = this.Upload.jsonBlob({ test: true }),
			fileWithNewName = this.Upload.rename(files[0], "newName.jpg");

		this.Upload
			.resize(files[0], 1024, 1024, 0.7, 'image/jpeg', 0.9, true)
			.then((resizedFile) => {
				console.log(resizedFile);
			});
	}
}

angular.module("app").controller("UploadController", UploadController);
