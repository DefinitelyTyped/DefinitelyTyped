// Type definitions for Dropzone 4.3.0
// Project: http://www.dropzonejs.com/
// Definitions by: Natan Vivo <https://github.com/nvivo>, Andy Hawkins <https://github.com/a904guy/,http://a904guy.com/,http://www.bmbsqd.com>, Vasya Aksyonov <https://github.com/outring>, Simon Huber <https://github.com/renuo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
	headers?: {};
	clickable?: boolean|string|HTMLElement|(string|HTMLElement)[];
	ignoreHiddenFiles?: boolean;
	acceptedFiles?: string;
	renameFilename?(name:string): string;
	autoProcessQueue?: boolean;
	autoQueue?: boolean;
	addRemoveLinks?: boolean;
	previewsContainer?: boolean|string|HTMLElement;
	hiddenInputContainer?: HTMLElement;
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

	sending?(file:DropzoneFile, xhr:XMLHttpRequest, formData:FormData):void;
	sendingmultiple?(files:DropzoneFile[], xhr:XMLHttpRequest, formData:FormData):void;

	success?(file: DropzoneFile, response: Object|string): void;
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

	on(eventName:string, callback:(...args:any[]) => void):Dropzone;

	off(eventName:string):Dropzone;

	emit(eventName:string, ...args:any[]):Dropzone;

	on(eventName:"drop", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"dragstart", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"dragend", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"dragenter", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"dragover", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"dragleave", callback:(e:DragEvent) => any):Dropzone;
	on(eventName:"paste", callback:(e:DragEvent) => any):Dropzone;

	on(eventName:"reset"):Dropzone;

	on(eventName:"addedfile", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"addedfiles", callback:(files:DropzoneFile[]) => any):Dropzone;
	on(eventName:"removedfile", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"thumbnail", callback:(file:DropzoneFile, dataUrl:string) => any):Dropzone;

	on(eventName:"error", callback:(file:DropzoneFile, message:string|Error) => any):Dropzone;
	on(eventName:"errormultiple", callback:(files:DropzoneFile[], message:string|Error) => any):Dropzone;

	on(eventName:"processing", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"processingmultiple", callback:(files:DropzoneFile[]) => any):Dropzone;

	on(eventName:"uploadprogress", callback:(file:DropzoneFile, progress:number, bytesSent:number) => any):Dropzone;
	on(eventName:"totaluploadprogress", callback:(totalProgress:number, totalBytes:number, totalBytesSent:number) => any):Dropzone;

	on(eventName:"sending", callback:(file:DropzoneFile, xhr:XMLHttpRequest, formData:FormData) => any):Dropzone;
	on(eventName:"sendingmultiple", callback:(files:DropzoneFile[], xhr:XMLHttpRequest, formData:FormData) => any):Dropzone;

	on(eventName:"success", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"successmultiple", callback:(files:DropzoneFile[]) => any):Dropzone;

	on(eventName:"canceled", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"canceledmultiple", callback:(file:DropzoneFile[]) => any):Dropzone;

	on(eventName:"complete", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"completemultiple", callback:(file:DropzoneFile[]) => any):Dropzone;

	on(eventName:"maxfilesexceeded", callback:(file:DropzoneFile) => any):Dropzone;
	on(eventName:"maxfilesreached", callback:(files:DropzoneFile[]) => any):Dropzone;
	on(eventName:"queuecomplete"):Dropzone;

	emit(eventName:"drop", e:DragEvent):Dropzone;
	emit(eventName:"dragstart", e:DragEvent):Dropzone;
	emit(eventName:"dragend", e:DragEvent):Dropzone;
	emit(eventName:"dragenter", e:DragEvent):Dropzone;
	emit(eventName:"dragover", e:DragEvent):Dropzone;
	emit(eventName:"dragleave", e:DragEvent):Dropzone;
	emit(eventName:"paste", e:DragEvent):Dropzone;

	emit(eventName:"reset"):Dropzone;

	emit(eventName:"addedfile", file:DropzoneFile):Dropzone;
	emit(eventName:"addedfiles", files:DropzoneFile[]):Dropzone;
	emit(eventName:"removedfile", file:DropzoneFile):Dropzone;
	emit(eventName:"thumbnail", file:DropzoneFile, dataUrl:string):Dropzone;

	emit(eventName:"error", file:DropzoneFile, message:string|Error):Dropzone;
	emit(eventName:"errormultiple", files:DropzoneFile[], message:string|Error):Dropzone;

	emit(eventName:"processing", file:DropzoneFile):Dropzone;
	emit(eventName:"processingmultiple", files:DropzoneFile[]):Dropzone;

	emit(eventName:"uploadprogress", file:DropzoneFile, progress:number, bytesSent:number):Dropzone;
	emit(eventName:"totaluploadprogress", totalProgress:number, totalBytes:number, totalBytesSent:number):Dropzone;

	emit(eventName:"sending", file:DropzoneFile, xhr:XMLHttpRequest, formData:FormData):Dropzone;
	emit(eventName:"sendingmultiple", files:DropzoneFile[], xhr:XMLHttpRequest, formData:FormData):Dropzone;

	emit(eventName:"success", file:DropzoneFile):Dropzone;
	emit(eventName:"successmultiple", files:DropzoneFile[]):Dropzone;

	emit(eventName:"canceled", file:DropzoneFile):Dropzone;
	emit(eventName:"canceledmultiple", file:DropzoneFile[]):Dropzone;

	emit(eventName:"complete", file:DropzoneFile):Dropzone;
	emit(eventName:"completemultiple", file:DropzoneFile[]):Dropzone;

	emit(eventName:"maxfilesexceeded", file:DropzoneFile):Dropzone;
	emit(eventName:"maxfilesreached", files:DropzoneFile[]):Dropzone;
	emit(eventName:"queuecomplete"):Dropzone;

}

interface JQuery {
	dropzone(options:DropzoneOptions): Dropzone;
}

declare module "dropzone" {
	export = Dropzone;
}
