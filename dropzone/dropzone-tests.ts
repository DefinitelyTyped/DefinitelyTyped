/// <reference path="./dropzone.d.ts"/>

const dropzoneFromString = new Dropzone(".test");
const dropzoneFromElement = new Dropzone(document.getElementById("test"));

const dropzoneWithOptions = new Dropzone(".test", {
	url: "/some/url",
	method: "post",
	withCredentials: false,
	parallelUploads: 2,
	uploadMultiple: true,
	maxFilesize: 1024,
	paramName: "file",
	createImageThumbnails: true,
	maxThumbnailFilesize: 1024,
	thumbnailWidth: 50,
	thumbnailHeight: 50,
	filesizeBase: 1000,
	maxFiles: 100,
	params: {
		additional: "param"
	},
	headers: {
		"Some-Header": "Value"
	},
	clickable: true,
	ignoreHiddenFiles: true,
	acceptedFiles: "image/*",
	autoProcessQueue: true,
	autoQueue: true,
	addRemoveLinks: true,
	previewsContainer: "<div></div>",
	capture: "camera",

	dictDefaultMessage: "",
	dictFallbackMessage: "",
	dictFallbackText: "",
	dictFileTooBig: "",
	dictInvalidFileType: "",
	dictResponseError: "",
	dictCancelUpload: "",
	dictCancelUploadConfirmation: "",
	dictRemoveFile: "",
	dictRemoveFileConfirmation: "",
	dictMaxFilesExceeded: "",

	accept: (file:DropzoneFile, done:(error?:string|Error) => void) => {
		if (file.accepted) {
			file.previewElement.classList.add("accepted");
			file.previewTemplate.classList.add("accepted");
			file.previewsContainer.classList.add("accepted");
			done();
		}
		else {
			done(new Error(file.status));
		}
	},
	init: () => console.log("Initialized"),
	forceFallback: false,
	fallback: () => console.log("Fallback"),
	resize: (file:DropzoneFile) => ({
		srcX: 0,
		srcY: 0,
		trgX: 10,
		trgY: 10,
		srcWidth: 100,
		srcHeight: 100,
		trgWidth: 50,
		trgHeight: 50,
		optWidth: 50,
		optHeight: 50
	}),

	drop: (e:DragEvent) => console.log("Drop"),
	dragstart: (e:DragEvent) => console.log("Dragstart"),
	dragend: (e:DragEvent) => console.log("Dragend"),
	dragenter: (e:DragEvent) => console.log("Dragenter"),
	dragover: (e:DragEvent) => console.log("Dragover"),
	dragleave: (e:DragEvent) => console.log("Dragleave"),
	paste: (e:DragEvent) => console.log("Paste"),

	reset: () => console.log("Reset"),

	addedfile: (file:DropzoneFile) => console.log("Addedfile"),
	addedfiles: (files:DropzoneFile[]) => console.log("Addedfiles"),
	removedfile: (file:DropzoneFile) => console.log("Removedfile"),
	thumbnail: (file:DropzoneFile, dataUrl:string) => console.log("Thumbnail"),

	error: (file:DropzoneFile, message:string|Error) => console.log("Error"),
	errormultiple: (files:DropzoneFile[], message:string|Error) => console.log("Errormultiple"),

	processing: (file:DropzoneFile) => console.log("Processing"),
	processingmultiple: (files:DropzoneFile[]) => console.log("Processingmultiple"),

	uploadprogress: (file:DropzoneFile, progress:number, bytesSent:number) => console.log("Uploadprogress"),
	totaluploadprogress: (totalProgress:number, totalBytes:number, totalBytesSent:number) => console.log("Totaluploadprogress"),

	sending: (file:DropzoneFile, xhr:XMLHttpRequest, formData:{}) => console.log("Sending"),
	sendingmultiple: (files:DropzoneFile[], xhr:XMLHttpRequest, formData:{}) => console.log("Sendingmultiple"),

	success: (file:DropzoneFile) => console.log("Success"),
	successmultiple: (files:DropzoneFile[]) => console.log("Successmultiple"),

	canceled: (file:DropzoneFile) => console.log("Canceled"),
	canceledmultiple: (file:DropzoneFile[]) => console.log("Canceledmultiple"),

	complete: (file:DropzoneFile) => console.log("Complete"),
	completemultiple: (file:DropzoneFile[]) => console.log("Completemultiple"),

	maxfilesexceeded: (file:DropzoneFile) => console.log("Maxfilesexceeded"),
	maxfilesreached: (files:DropzoneFile[]) => console.log("Maxfilesreached"),
	queuecomplete: () => console.log("Queuecomplete"),

	previewTemplate: "<div></div>",
});

var dropzoneWithOptionsVariations:Dropzone;
dropzoneWithOptionsVariations = new Dropzone(".test", {
	clickable: ".test"
});
dropzoneWithOptionsVariations = new Dropzone(".test", {
	clickable: document.getElementById("test")
});
dropzoneWithOptionsVariations = new Dropzone(".test", {
	clickable: [".test", ".test"]
});
dropzoneWithOptionsVariations = new Dropzone(".test", {
	clickable: [document.getElementById("test"), document.getElementById("test")]
});
dropzoneWithOptionsVariations = new Dropzone(".test", {
	clickable: ["test", document.getElementById("test")]
});

const dropzone = new Dropzone(".test");

dropzone.enable();
dropzone.disable();

dropzone.files.forEach(f => {
	if (f.accepted) {
		f.previewElement.classList.add("accepted");
		f.previewTemplate.classList.add("accepted");
		f.previewsContainer.classList.add("accepted");
	}
	else {
		console.log(f.status.toUpperCase());
	}
});

const firstFile = dropzone.files[0];
dropzone.removeFile(firstFile);
dropzone.addFile(firstFile);
dropzone.enqueueFile(firstFile);
dropzone.processFile(firstFile);
dropzone.uploadFile(firstFile);
dropzone.cancelUpload(firstFile);
dropzone.createThumbnail(firstFile, () => {
	console.log("createThumbnail")
});
dropzone.createThumbnailFromUrl(firstFile, "/some/url", () => {
	console.log("createThumbnailFromUrl")
});
dropzone.accept(firstFile, (e:string|Error) => {
	console.log(e);
});

const acceptedFiles = dropzone.getAcceptedFiles();
dropzone.processFiles(acceptedFiles);

const rejectedFiles = dropzone.getRejectedFiles();
dropzone.enqueueFiles(rejectedFiles);

const queuedFiles = dropzone.getQueuedFiles();
dropzone.processFiles(queuedFiles);

const uploadingFiles = dropzone.getUploadingFiles();
dropzone.processFiles(uploadingFiles);

const activeFiles = dropzone.getActiveFiles();
dropzone.processFiles(activeFiles);

const addedFiles = dropzone.getFilesWithStatus(Dropzone.ADDED);
dropzone.processFiles(addedFiles);

dropzone.processQueue();
dropzone.removeAllFiles(true);

dropzone.destroy();
