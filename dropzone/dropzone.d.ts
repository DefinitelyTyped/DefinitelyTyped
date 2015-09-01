// Type definitions for Dropzone 4.0.1
// Project: http://www.dropzonejs.com/
// Definitions by: Natan Vivo <https://github.com/nvivo>, Andy Hawkins <https://github.com/a904guy/,http://a904guy.com/,http://www.bmbsqd.com>, Vasya Aksyonov <https://github.com/outring>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface DropzoneResizeInfo {
	srcX?:number;
	srcY?:number;
	trgX?:number;
	trgY?:number;
	srcWidth?:number;
	srcHeight?:number;
	trgWidth?:number;
	trgHeight?:number;
	optWidth?:number;
	optHeight?:number;
}

interface DropzoneFile extends File {
	previewElement: HTMLElement;
	previewTemplate: HTMLElement;
	previewsContainer: HTMLElement;
	status: string;
	accepted: boolean;
}

interface DropzoneOptions {
	url?: string;
	method?: string;
	withCredentials?: boolean;
	parallelUploads?: number;
	uploadMultiple?: boolean;
	maxFilesize?: number;
	paramName?: string;
	createImageThumbnails?: boolean;
	maxThumbnailFilesize?: number;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	filesizeBase?: number;
	maxFiles?: number;
	params?: {};
	clickable?: boolean|string|HTMLElement|(string|HTMLElement)[];
	ignoreHiddenFiles?: boolean;
	acceptedFiles?: string;
	autoProcessQueue?: boolean;
	autoQueue?: boolean;
	addRemoveLinks?: boolean;
	previewsContainer?: boolean|string|HTMLElement;
	capture?: string;

	dictDefaultMessage?: string;
	dictFallbackMessage?: string;
	dictFallbackText?: string;
	dictFileTooBig?: string;
	dictInvalidFileType?: string;
	dictResponseError?: string;
	dictCancelUpload?: string;
	dictCancelUploadConfirmation?: string;
	dictRemoveFile?: string;
	dictRemoveFileConfirmation?: string;
	dictMaxFilesExceeded?: string;

	accept?(file:DropzoneFile, done:(error?:string|Error) => void):void;
	init?():void;
	forceFallback?: boolean;
	fallback?():void;
	resize?(file:DropzoneFile):DropzoneResizeInfo;

	drop?(e:DragEvent):void;
	dragstart?(e:DragEvent):void;
	dragend?(e:DragEvent):void;
	dragenter?(e:DragEvent):void;
	dragover?(e:DragEvent):void;
	dragleave?(e:DragEvent):void;
	paste?(e:DragEvent):void;

	reset?():void;

	addedfile?(file:DropzoneFile):void;
	addedfiles?(files:DropzoneFile[]):void;
	removedfile?(file:DropzoneFile):void;
	thumbnail?(file:DropzoneFile, dataUrl:string):void;

	error?(file:DropzoneFile, message:string|Error, xhr:XMLHttpRequest):void;
	errormultiple?(files:DropzoneFile[], message:string|Error, xhr:XMLHttpRequest):void;

	processing?(file:DropzoneFile):void;
	processingmultiple?(files:DropzoneFile[]):void;

	uploadprogress?(file:DropzoneFile, progress:number, bytesSent:number):void;
	totaluploadprogress?(totalProgress:number, totalBytes:number, totalBytesSent:number):void;

	sending?(file:DropzoneFile, xhr:XMLHttpRequest, formData:{}):void;
	sendingmultiple?(files:DropzoneFile[], xhr:XMLHttpRequest, formData:{}):void;

	success?(file:DropzoneFile, responseText:string):void;
	successmultiple?(files:DropzoneFile[], responseText:string):void;

	canceled?(file:DropzoneFile):void;
	canceledmultiple?(file:DropzoneFile[]):void;

	complete?(file:DropzoneFile):void;
	completemultiple?(file:DropzoneFile[]):void;

	maxfilesexceeded?(file:DropzoneFile):void;
	maxfilesreached?(files:DropzoneFile[]):void;
	queuecomplete?():void;

	previewTemplate?: string;
}

declare class Dropzone {
	constructor(container:string|HTMLElement, options?:DropzoneOptions);

	static autoDiscover:boolean;
	static options:any;
	static confirm:(question:string, accepted:() => void, rejected?:() => void) => void;

	static ADDED:string;
	static QUEUED:string;
	static ACCEPTED:string;
	static UPLOADING:string;
	static PROCESSING:string;
	static CANCELED:string;
	static ERROR:string;
	static SUCCESS:string;

	files:DropzoneFile[];

	enable():void;

	disable():void;

	destroy():Dropzone;

	addFile(file:DropzoneFile):void;

	removeFile(file:DropzoneFile):void;

	removeAllFiles(cancelIfNecessary?:boolean):void;

	processQueue():void;

	cancelUpload(file:DropzoneFile):void;

	processFiles(files:DropzoneFile[]):void;

	processFile(file:DropzoneFile):void;

	uploadFile(file:DropzoneFile):void;

	getAcceptedFiles():DropzoneFile[];

	getRejectedFiles():DropzoneFile[];

	getQueuedFiles():DropzoneFile[];

	getUploadingFiles():DropzoneFile[];

	accept(file:DropzoneFile, done:(error?:string|Error) => void):void;

	getActiveFiles():DropzoneFile[];

	getFilesWithStatus(status:string):DropzoneFile[];

	enqueueFile(file:DropzoneFile):void;

	enqueueFiles(file:DropzoneFile[]):void;

	createThumbnail(file:DropzoneFile, callback?:(...args:any[]) => void):any;

	createThumbnailFromUrl(file:DropzoneFile, url:string, callback?:(...args:any[]) => void):any;

	on(eventName:string, callback:(...args:any[]) => void):void;

	off(eventName:string):void;

	emit(eventName:string, ...args:any[]):void;

	on(eventName:"drop", callback:(e:DragEvent) => any):void;
	on(eventName:"dragstart", callback:(e:DragEvent) => any):void;
	on(eventName:"dragend", callback:(e:DragEvent) => any):void;
	on(eventName:"dragenter", callback:(e:DragEvent) => any):void;
	on(eventName:"dragover", callback:(e:DragEvent) => any):void;
	on(eventName:"dragleave", callback:(e:DragEvent) => any):void;
	on(eventName:"paste", callback:(e:DragEvent) => any):void;

	on(eventName:"reset"):void;

	on(eventName:"addedfile", callback:(file:DropzoneFile) => any):void;
	on(eventName:"addedfiles", callback:(files:DropzoneFile[]) => any):void;
	on(eventName:"removedfile", callback:(file:DropzoneFile) => any):void;
	on(eventName:"thumbnail", callback:(file:DropzoneFile, dataUrl:string) => any):void;

	on(eventName:"error", callback:(file:DropzoneFile, message:string|Error) => any):void;
	on(eventName:"errormultiple", callback:(files:DropzoneFile[], message:string|Error) => any):void;

	on(eventName:"processing", callback:(file:DropzoneFile) => any):void;
	on(eventName:"processingmultiple", callback:(files:DropzoneFile[]) => any):void;

	on(eventName:"uploadprogress", callback:(file:DropzoneFile, progress:number, bytesSent:number) => any):void;
	on(eventName:"totaluploadprogress", callback:(totalProgress:number, totalBytes:number, totalBytesSent:number) => any):void;

	on(eventName:"sending", callback:(file:DropzoneFile, xhr:XMLHttpRequest, formData:{}) => any):void;
	on(eventName:"sendingmultiple", callback:(files:DropzoneFile[], xhr:XMLHttpRequest, formData:{}) => any):void;

	on(eventName:"success", callback:(file:DropzoneFile) => any):void;
	on(eventName:"successmultiple", callback:(files:DropzoneFile[]) => any):void;

	on(eventName:"canceled", callback:(file:DropzoneFile) => any):void;
	on(eventName:"canceledmultiple", callback:(file:DropzoneFile[]) => any):void;

	on(eventName:"complete", callback:(file:DropzoneFile) => any):void;
	on(eventName:"completemultiple", callback:(file:DropzoneFile[]) => any):void;

	on(eventName:"maxfilesexceeded", callback:(file:DropzoneFile) => any):void;
	on(eventName:"maxfilesreached", callback:(files:DropzoneFile[]) => any):void;
	on(eventName:"queuecomplete"):void;

	emit(eventName:"drop", e:DragEvent):void;
	emit(eventName:"dragstart", e:DragEvent):void;
	emit(eventName:"dragend", e:DragEvent):void;
	emit(eventName:"dragenter", e:DragEvent):void;
	emit(eventName:"dragover", e:DragEvent):void;
	emit(eventName:"dragleave", e:DragEvent):void;
	emit(eventName:"paste", e:DragEvent):void;

	emit(eventName:"reset"):void;

	emit(eventName:"addedfile", file:DropzoneFile):void;
	emit(eventName:"addedfiles", files:DropzoneFile[]):void;
	emit(eventName:"removedfile", file:DropzoneFile):void;
	emit(eventName:"thumbnail", file:DropzoneFile, dataUrl:string):void;

	emit(eventName:"error", file:DropzoneFile, message:string|Error):void;
	emit(eventName:"errormultiple", files:DropzoneFile[], message:string|Error):void;

	emit(eventName:"processing", file:DropzoneFile):void;
	emit(eventName:"processingmultiple", files:DropzoneFile[]):void;

	emit(eventName:"uploadprogress", file:DropzoneFile, progress:number, bytesSent:number):void;
	emit(eventName:"totaluploadprogress", totalProgress:number, totalBytes:number, totalBytesSent:number):void;

	emit(eventName:"sending", file:DropzoneFile, xhr:XMLHttpRequest, formData:{}):void;
	emit(eventName:"sendingmultiple", files:DropzoneFile[], xhr:XMLHttpRequest, formData:{}):void;

	emit(eventName:"success", file:DropzoneFile):void;
	emit(eventName:"successmultiple", files:DropzoneFile[]):void;

	emit(eventName:"canceled", file:DropzoneFile):void;
	emit(eventName:"canceledmultiple", file:DropzoneFile[]):void;

	emit(eventName:"complete", file:DropzoneFile):void;
	emit(eventName:"completemultiple", file:DropzoneFile[]):void;

	emit(eventName:"maxfilesexceeded", file:DropzoneFile):void;
	emit(eventName:"maxfilesreached", files:DropzoneFile[]):void;
	emit(eventName:"queuecomplete"):void;

}

interface JQuery {
	dropzone(options:DropzoneOptions): Dropzone;
}

declare module "dropzone" {
	export = Dropzone;
}
