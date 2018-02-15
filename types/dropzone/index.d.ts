// Type definitions for Dropzone 5.0.0
// Project: http://www.dropzonejs.com/
// Definitions by: Natan Vivo <https://github.com/nvivo>, Andy Hawkins <https://github.com/a904guy/,http://a904guy.com/,http://www.bmbsqd.com>, Vasya Aksyonov <https://github.com/outring>, Simon Huber <https://github.com/renuo>, Sebastiaan de Rooij <https://github.com/Hikariii>, Ted Bicknell <https://github.com/tedbcsgpro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery"/>

declare namespace Dropzone {
	export interface DropzoneResizeInfo {
		srcX?: number;
		srcY?: number;
		trgX?: number;
		trgY?: number;
		srcWidth?: number;
		srcHeight?: number;
		trgWidth?: number;
		trgHeight?: number;
	}

	export interface DropzoneFile extends File {
		previewElement: HTMLElement;
		previewTemplate: HTMLElement;
		previewsContainer: HTMLElement;
		status: string;
		accepted: boolean;
		xhr?: XMLHttpRequest;
	}
	
	export interface DropzoneDictFileSizeUnits { 
		tb?: string;
		gb?: string;
		mb?: string;
		kb?: string;
		b?: string;
	}

	export interface DropzoneOptions {
		url?: string;
		method?: string;
		withCredentials?: boolean;
		timeout?: number;
		parallelUploads?: number;
		uploadMultiple?: boolean;
		maxFilesize?: number;
		paramName?: string;
		createImageThumbnails?: boolean;
		maxThumbnailFilesize?: number;
		thumbnailWidth?: number;
		thumbnailHeight?: number;
		thumbnailMethod?: string;
		resizeWidth?: number;
		resizeHeight?: number;
		resizeMimeType?: string;
		resizeQuality?: number;
		resizeMethod?: string;
		filesizeBase?: number;
		maxFiles?: number;
		params?: {};
		headers?: {};
		clickable?: boolean | string | HTMLElement | (string | HTMLElement)[];
		ignoreHiddenFiles?: boolean;
		acceptedFiles?: string;
		renameFilename?(name: string): string;
		autoProcessQueue?: boolean;
		autoQueue?: boolean;
		addRemoveLinks?: boolean;
		previewsContainer?: boolean | string | HTMLElement;
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
		dictFileSizeUnits?: DropzoneDictFileSizeUnits;

		accept?(file: DropzoneFile, done: (error?: string | Error) => void): void;
		init?(): void;
		forceFallback?: boolean;
		fallback?(): void;
		resize?(file: DropzoneFile, width?: number, height?: number, resizeMethod?: string): DropzoneResizeInfo;

		drop?(e: DragEvent): void;
		dragstart?(e: DragEvent): void;
		dragend?(e: DragEvent): void;
		dragenter?(e: DragEvent): void;
		dragover?(e: DragEvent): void;
		dragleave?(e: DragEvent): void;
		paste?(e: DragEvent): void;

		reset?(): void;

		addedfile?(file: DropzoneFile): void;
		addedfiles?(files: DropzoneFile[]): void;
		removedfile?(file: DropzoneFile): void;
		thumbnail?(file: DropzoneFile, dataUrl: string): void;

		error?(file: DropzoneFile, message: string | Error, xhr: XMLHttpRequest): void;
		errormultiple?(files: DropzoneFile[], message: string | Error, xhr: XMLHttpRequest): void;

		processing?(file: DropzoneFile): void;
		processingmultiple?(files: DropzoneFile[]): void;

		uploadprogress?(file: DropzoneFile, progress: number, bytesSent: number): void;
		totaluploadprogress?(totalProgress: number, totalBytes: number, totalBytesSent: number): void;

		sending?(file: DropzoneFile, xhr: XMLHttpRequest, formData: FormData): void;
		sendingmultiple?(files: DropzoneFile[], xhr: XMLHttpRequest, formData: FormData): void;

		success?(file: DropzoneFile, response: Object | string): void;
		successmultiple?(files: DropzoneFile[], responseText: string): void;

		canceled?(file: DropzoneFile): void;
		canceledmultiple?(file: DropzoneFile[]): void;

		complete?(file: DropzoneFile): void;
		completemultiple?(file: DropzoneFile[]): void;

		maxfilesexceeded?(file: DropzoneFile): void;
		maxfilesreached?(files: DropzoneFile[]): void;
		queuecomplete?(): void;

		previewTemplate?: string;
	}
}

declare class Dropzone {
	constructor(container: string | HTMLElement, options?: Dropzone.DropzoneOptions);

	static autoDiscover: boolean;
	static options: any;
	static confirm: (question: string, accepted: () => void, rejected?: () => void) => void;
	static createElement(string: string): HTMLElement;
	static isBrowserSupported(): boolean;
	static instances: Dropzone[];

	static ADDED: string;
	static QUEUED: string;
	static ACCEPTED: string;
	static UPLOADING: string;
	static PROCESSING: string;
	static CANCELED: string;
	static ERROR: string;
	static SUCCESS: string;

	files: Dropzone.DropzoneFile[];
	defaultOptions: Dropzone.DropzoneOptions;

	enable(): void;

	disable(): void;

	destroy(): Dropzone;

	addFile(file: Dropzone.DropzoneFile): void;

	removeFile(file: Dropzone.DropzoneFile): void;

	removeAllFiles(cancelIfNecessary?: boolean): void;

	resizeImage(file: Dropzone.DropzoneFile, width?: number, height?: number, resizeMethod?: string, callback?: (...args: any[]) => void): void;

	processQueue(): void;

	cancelUpload(file: Dropzone.DropzoneFile): void;

	createThumbnail(file: Dropzone.DropzoneFile, width?: number, height?: number, resizeMethod?: string, fixOrientation?: boolean, callback?: (...args: any[]) => void): any;

	createThumbnailFromUrl(file: Dropzone.DropzoneFile, width?: number, height?: number, resizeMethod?: string, fixOrientation?: boolean, callback?: (...args: any[]) => void, crossOrigin?: string): any;

	processFiles(files: Dropzone.DropzoneFile[]): void;

	processFile(file: Dropzone.DropzoneFile): void;

	uploadFile(file: Dropzone.DropzoneFile): void;

	uploadFiles(files: Dropzone.DropzoneFile[]): void;

	getAcceptedFiles(): Dropzone.DropzoneFile[];

	getActiveFiles(): Dropzone.DropzoneFile[];

	getAddedFiles(): Dropzone.DropzoneFile[];

	getRejectedFiles(): Dropzone.DropzoneFile[];

	getQueuedFiles(): Dropzone.DropzoneFile[];

	getUploadingFiles(): Dropzone.DropzoneFile[];

	accept(file: Dropzone.DropzoneFile, done: (error?: string | Error) => void): void;

	getActiveFiles(): Dropzone.DropzoneFile[];

	getFilesWithStatus(status: string): Dropzone.DropzoneFile[];

	enqueueFile(file: Dropzone.DropzoneFile): void;

	enqueueFiles(file: Dropzone.DropzoneFile[]): void;

	createThumbnail(file: Dropzone.DropzoneFile, callback?: (...args: any[]) => void): any;

	createThumbnailFromUrl(file: Dropzone.DropzoneFile, url: string, callback?: (...args: any[]) => void): any;

	on(eventName: string, callback: (...args: any[]) => void): Dropzone;

	off(): Dropzone;
	off(eventName: string, callback?: (...args: any[]) => void): Dropzone;

	emit(eventName: string, ...args: any[]): Dropzone;

	on(eventName: "drop", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "dragstart", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "dragend", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "dragenter", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "dragover", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "dragleave", callback: (e: DragEvent) => any): Dropzone;
	on(eventName: "paste", callback: (e: DragEvent) => any): Dropzone;

	on(eventName: "reset"): Dropzone;

	on(eventName: "addedfile", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "addedfiles", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
	on(eventName: "removedfile", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "thumbnail", callback: (file: Dropzone.DropzoneFile, dataUrl: string) => any): Dropzone;

	on(eventName: "error", callback: (file: Dropzone.DropzoneFile, message: string | Error) => any): Dropzone;
	on(eventName: "errormultiple", callback: (files: Dropzone.DropzoneFile[], message: string | Error) => any): Dropzone;

	on(eventName: "processing", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "processingmultiple", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

	on(eventName: "uploadprogress", callback: (file: Dropzone.DropzoneFile, progress: number, bytesSent: number) => any): Dropzone;
	on(eventName: "totaluploadprogress", callback: (totalProgress: number, totalBytes: number, totalBytesSent: number) => any): Dropzone;

	on(eventName: "sending", callback: (file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData) => any): Dropzone;
	on(eventName: "sendingmultiple", callback: (files: Dropzone.DropzoneFile[], xhr: XMLHttpRequest, formData: FormData) => any): Dropzone;

	on(eventName: "success", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "successmultiple", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;

	on(eventName: "canceled", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "canceledmultiple", callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

	on(eventName: "complete", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "completemultiple", callback: (file: Dropzone.DropzoneFile[]) => any): Dropzone;

	on(eventName: "maxfilesexceeded", callback: (file: Dropzone.DropzoneFile) => any): Dropzone;
	on(eventName: "maxfilesreached", callback: (files: Dropzone.DropzoneFile[]) => any): Dropzone;
	on(eventName: "queuecomplete"): Dropzone;

	emit(eventName: "drop", e: DragEvent): Dropzone;
	emit(eventName: "dragstart", e: DragEvent): Dropzone;
	emit(eventName: "dragend", e: DragEvent): Dropzone;
	emit(eventName: "dragenter", e: DragEvent): Dropzone;
	emit(eventName: "dragover", e: DragEvent): Dropzone;
	emit(eventName: "dragleave", e: DragEvent): Dropzone;
	emit(eventName: "paste", e: DragEvent): Dropzone;

	emit(eventName: "reset"): Dropzone;

	emit(eventName: "addedfile", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "addedfiles", files: Dropzone.DropzoneFile[]): Dropzone;
	emit(eventName: "removedfile", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "thumbnail", file: Dropzone.DropzoneFile, dataUrl: string): Dropzone;

	emit(eventName: "error", file: Dropzone.DropzoneFile, message: string | Error): Dropzone;
	emit(eventName: "errormultiple", files: Dropzone.DropzoneFile[], message: string | Error): Dropzone;

	emit(eventName: "processing", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "processingmultiple", files: Dropzone.DropzoneFile[]): Dropzone;

	emit(eventName: "uploadprogress", file: Dropzone.DropzoneFile, progress: number, bytesSent: number): Dropzone;
	emit(eventName: "totaluploadprogress", totalProgress: number, totalBytes: number, totalBytesSent: number): Dropzone;

	emit(eventName: "sending", file: Dropzone.DropzoneFile, xhr: XMLHttpRequest, formData: FormData): Dropzone;
	emit(eventName: "sendingmultiple", files: Dropzone.DropzoneFile[], xhr: XMLHttpRequest, formData: FormData): Dropzone;

	emit(eventName: "success", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "successmultiple", files: Dropzone.DropzoneFile[]): Dropzone;

	emit(eventName: "canceled", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "canceledmultiple", file: Dropzone.DropzoneFile[]): Dropzone;

	emit(eventName: "complete", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "completemultiple", file: Dropzone.DropzoneFile[]): Dropzone;

	emit(eventName: "maxfilesexceeded", file: Dropzone.DropzoneFile): Dropzone;
	emit(eventName: "maxfilesreached", files: Dropzone.DropzoneFile[]): Dropzone;
	emit(eventName: "queuecomplete"): Dropzone;

}

interface JQuery {
	dropzone(options: Dropzone.DropzoneOptions): Dropzone;
}

export = Dropzone;
export as namespace Dropzone;
