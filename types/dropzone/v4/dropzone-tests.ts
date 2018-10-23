const dropzoneFromString = new Dropzone(".test");
const dropzoneFromElement = new Dropzone(document.getElementById("test"));
const dropzoneRenameFunction = function (name:string):string {
  return name + 'new';
};

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
	renameFilename: dropzoneRenameFunction,
	autoProcessQueue: true,
	autoQueue: true,
	addRemoveLinks: true,
	previewsContainer: "<div></div>",
	hiddenInputContainer: document.createElement("input"),
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

	accept: (file:Dropzone.DropzoneFile, done:(error?:string|Error) => void) => {
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
	resize: (file:Dropzone.DropzoneFile) => ({
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

	addedfile: (file:Dropzone.DropzoneFile) => console.log("Addedfile"),
	addedfiles: (files:Dropzone.DropzoneFile[]) => console.log("Addedfiles"),
	removedfile: (file:Dropzone.DropzoneFile) => console.log("Removedfile"),
	thumbnail: (file:Dropzone.DropzoneFile, dataUrl:string) => console.log("Thumbnail"),

	error: (file:Dropzone.DropzoneFile, message:string|Error) => console.log("Error"),
	errormultiple: (files:Dropzone.DropzoneFile[], message:string|Error) => console.log("Errormultiple"),

	processing: (file:Dropzone.DropzoneFile) => console.log("Processing"),
	processingmultiple: (files:Dropzone.DropzoneFile[]) => console.log("Processingmultiple"),

	uploadprogress: (file:Dropzone.DropzoneFile, progress:number, bytesSent:number) => console.log("Uploadprogress"),
	totaluploadprogress: (totalProgress:number, totalBytes:number, totalBytesSent:number) => console.log("Totaluploadprogress"),

	sending: (file:Dropzone.DropzoneFile, xhr:XMLHttpRequest, formData:{}) => console.log("Sending"),
	sendingmultiple: (files:Dropzone.DropzoneFile[], xhr:XMLHttpRequest, formData:{}) => console.log("Sendingmultiple"),

	success: (file:Dropzone.DropzoneFile) => console.log("Success"),
	successmultiple: (files:Dropzone.DropzoneFile[]) => console.log("Successmultiple"),

	canceled: (file:Dropzone.DropzoneFile) => console.log("Canceled"),
	canceledmultiple: (file:Dropzone.DropzoneFile[]) => console.log("Canceledmultiple"),

	complete: (file:Dropzone.DropzoneFile) => console.log("Complete"),
	completemultiple: (file:Dropzone.DropzoneFile[]) => console.log("Completemultiple"),

	maxfilesexceeded: (file:Dropzone.DropzoneFile) => console.log("Maxfilesexceeded"),
	maxfilesreached: (files:Dropzone.DropzoneFile[]) => console.log("Maxfilesreached"),
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

dropzoneWithOptionsVariations = new Dropzone(".test", {
    success: (file:Dropzone.DropzoneFile, response:Object) => console.log(file, response)
});
dropzoneWithOptionsVariations = new Dropzone(".test", {
    success: (file:Dropzone.DropzoneFile, response:string) => console.log(file, response)
});

const dropzone = new Dropzone(".test");

dropzone.enable();
dropzone.disable();

dropzone.files.forEach(f => {
	if (f.xhr) {
		console.log(f.xhr.readyState)
	}
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

dropzone
	.on("drop", () => {
		console.count('drop');
	})
	.on("dragstart", () => {
		console.count('dragstart');
	})
	.on("dragend", () => {
		console.count('dragend');
	})
	.on("dragenter", () => {
		console.count('dragenter');
	})
	.on("dragover", () => {
		console.count('dragover');
	})
	.on("dragleave", () => {
		console.count('dragleave');
	})
	.on("paste", () => {
		console.count('paste');
	})
	.on("reset", () => {
		console.count('reset');
	})
	.on("addedfile", () => {
		console.count('addedfile');
	})
	.on("addedfiles", () => {
		console.count('addedfiles');
	})
	.on("removedfile", () => {
		console.count('removedfile');
	})
	.on("thumbnail", () => {
		console.count('thumbnail');
	})
	.on("error", () => {
		console.count('error');
	})
	.on("errormultiple", () => {
		console.count('errormultiple');
	})
	.on("processing", () => {
		console.count('processing');
	})
	.on("processingmultiple", () => {
		console.count('processingmultiple');
	})
	.on("uploadprogress", () => {
		console.count('uploadprogress');
	})
	.on("totaluploadprogress", () => {
		console.count('totaluploadprogress');
	})
	.on("sending", () => {
		console.count('sending');
	})
	.on("sendingmultiple", () => {
		console.count('sendingmultiple');
	})
	.on("success", () => {
		console.count('success');
	})
	.on("successmultiple", () => {
		console.count('successmultiple');
	})
	.on("canceled", () => {
		console.count('canceled');
	})
	.on("canceledmultiple", () => {
		console.count('canceledmultiple');
	})
	.on("complete", () => {
		console.count('complete');
	})
	.on("completemultiple", () => {
		console.count('completemultiple');
	})
	.on("maxfilesexceeded", () => {
		console.count('maxfilesexceeded');
	})
	.on("maxfilesreached", () => {
		console.count('maxfilesreached');
	})
	.on("queuecomplete", () => {
		console.count('queuecomplete');
	});

	dropzone.off("drop", () => {
		console.count('drop');
	})
	.off("dragstart")
	.off();

dropzone.destroy();