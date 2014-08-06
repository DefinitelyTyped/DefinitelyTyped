// Type definitions for jQuery File Upload Plugin 9.7.0
// Project: https://github.com/blueimp/jQuery-File-Upload
// Definitions by: Martin From <https://github.com/MartinF>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryFileUploadOptions {

	// AJAX OPTIONS

	/** A string containing the URL to which the request is sent.
	If undefined or empty, it is set to the action property of the file upload form if available, or else the URL of the current page. */
	url: string;

	/** The HTTP request method for the file uploads.Can be "POST", "PUT" or "PATCH" and defaults to "POST".
	"PUT" and "PATCH" are only supported by browser supporting XHR file uploads, as iframe transport uploads rely on standard HTML forms which only support "POST" file uploads.
	If the type is defined as "PUT" or "PATCH", the iframe transport will send the files via "POST" and transfer the original method as "_method" URL parameter. */
	type: string;

	/** The type of data that is expected back from the server. */
	dataType: string;



	// GENERAL OPTIONS

	/** The drop target jQuery object, by default the complete document.
	Set to null or an empty jQuery collection to disable drag & drop support
	Default: $(document) */
	dropZone: JQuery;

	/** The paste target jQuery object, by the default the complete document.
	Set to null or an empty jQuery collection to disable paste support:
	Default: $(document) */
	pasteZone: JQuery;

	/** The file input field jQuery object, that is listened for change events.
	If undefined, it is set to the file input fields inside of the widget element on plugin initialization.
	Set to null or an empty jQuery collection to disable the change listener. */
	fileInput: JQuery;

	/** By default, the file input field is replaced with a clone after each input field change event.
	This is required for iframe transport queues and allows change events to be fired for the same file selection, but can be disabled by setting this option to false (more in -depth information can be found in the FAQ).
	Default: true */
	replaceFileInput: boolean;

	/** The parameter name for the file form data(the request argument name).
	If undefined or empty, the name property of the file input field is used, or "files[]" if the file input name property is also empty.Can be a string or an array of strings.
	Type: string or array */
	paramName: any;

	/** Allows to set the accept-charset attribute for the iframe upload forms.
	If formAcceptCharset is not set, the accept - charset attribute of the file upload widget form is used, if available. */
	formAcceptCharset: string;

	/** By default, each file of a selection is uploaded using an individual request for XHR type uploads.
	Set this option to false to upload file selections in one request each.
	Note: Uploading multiple files with one request requires the multipart option to be set to true(the default).
	Default: true */
	singleFileUploads: boolean;

	/** To limit the number of files uploaded with one XHR request, set the following option to an integer greater than 0
	Note: This option is ignored, if singleFileUploads is set to true or limitMultiFileUploadSize is set and the browser reports file sizes.
	Default: undefined */
	limitMultiFileUploads: number;

	/** The following option limits the number of files uploaded with one XHR request to keep the request size under or equal to the defined limit in bytes.
	Note: This option is ignored, if singleFileUploads is set to true.
	Default: undefined */
	limitMultiFileUploadSize: number;

	/** Multipart file uploads add a number of bytes to each uploaded file, therefore the following option adds an overhead for each file used in the limitMultiFileUploadSize configuration:
	Default: 512 */
	limitMultiFileUploadSizeOverhead: number;

	/** Set this option to true to issue all file upload requests in a sequential order instead of simultaneous requests.
	Default: false */
	sequentialUploads: boolean;

	/** To limit the number of concurrent uploads, set this option to an integer value greater than 0.
	Note: This option is ignored, if sequentialUploads is set to true.
	Default: undefined */
	limitConcurrentUploads: number;

	/** Set this option to true to force iframe transport uploads, even if the browser is capable of XHR file uploads.
	This can be useful for cross - site file uploads, if the Access - Control - Allow - Origin header cannot be set for the server - side upload handler which is required for cross - site XHR file uploads.
	Default: false */
	forceIframeTransport: boolean;

	/** This option is only used by the iframe transport and allows to override the URL of the initial iframe src.
	Default: 'javascript:false;' */
	initialIframeSrc: string;

	/** Set this option to the location of a redirect url on the origin server(the server that hosts the file upload form), for cross - domain iframe transport uploads.If set, this value is sent as part of the form data to the upload server.
	The upload server is supposed to redirect the browser to this url after the upload completes and append the upload information as URL - encoded JSON string to the redirect URL, e.g.by replacing the "%s" character sequence. */
	redirect: string;

	/** The parameter name for the redirect url, sent as part of the form data and set to 'redirect' if this option is empty. */
	redirectParamName: string;

	/** Set this option to the location of a postMessage API on the upload server, to enable cross - domain postMessage transport uploads.
	Note: This feature is currently only fully supported by Google Chrome. */
	postMessage: string;

	/** By default, XHR file uploads are sent as multipart/form - data.
	The iframe transport is always using multipart / form - data.
	If this option is set to false, the file content is streamed to the server url instead of sending a RFC 2388 multipart message for XMLHttpRequest file uploads.
	Non - multipart uploads are also referred to as HTTP PUT file upload.
	Note: Additional form data is ignored when the multipart option is set to false.
	Non - multipart uploads(multipart: false) are broken in Safari 5.1 - see issue #700. */
	multipart: boolean;

	/** To upload large files in smaller chunks, set this option to a preferred maximum chunk size.If set to 0, null or undefined, or the browser does not support the required Blob API, files will be uploaded as a whole.
	For chunked uploads to work in Mozilla Firefox < 7, the multipart option has to be set to false.This is due to Gecko 2.0(Firefox 4 etc.) adding blobs with an empty filename when building a multipart upload request using the FormData interface - see Bugzilla entry #649150(Fixed in FF 7.0).Several server - side frameworks(including PHP and Django) cannot handle multipart file uploads with empty filenames.
	Note: If this option is enabled and singleFileUploads is set to false, only the first file of a selection will be uploaded.
	Default: undefined */
	maxChunkSize: number;

	/** When a non-multipart upload or a chunked multipart upload has been aborted, this option can be used to resume the upload by setting it to the size of the already uploaded bytes.This option is most useful when modifying the options object inside of the "add" or "send" callbacks, as the options are cloned for each file upload.
	Default: undefined */
	uploadedBytes: number;

	/** By default, failed(abort or error) file uploads are removed from the global progress calculation.
	Set this option to false to prevent recalculating the global progress data.
	Default: true */
	recalculateProgress: boolean;

	/** The minimum time interval in milliseconds to calculate and trigger progress events.
	Default: 100 */
	progressInterval: number;

	/** The minimum time interval in milliseconds to calculate progress bitrate.
	Default: 500 */
	bitrateInterval: number;

	/** By default, files added to the widget are uploaded as soon as the user clicks on the start buttons. To enable automatic uploads, set this option to true.
	Default: true */
	autoUpload: boolean;

	/** Additional form data to be sent along with the file uploads can be set using this option, which accepts an array of objects with name and value properties, a function returning such an array, a FormData object (for XHR file uploads), or a simple object.
	The form of the first fileInput is given as parameter to the function.
	Note: Additional form data is ignored when the multipart option is set to false.
	Type: Array, Object, function or FormData
	Default: A function returning the form fields as serialized Array */
	formData: any;



	// CALLBACK OPTIONS

	/** The add callback can be understood as the callback for the file upload request queue. It is invoked as soon as files are added to the fileupload widget - via file input selection, drag & drop or add API call.
	The data parameter allows to override plugin options as well as define ajax settings.
	data.files holds a list of files for the upload request: If the singleFileUploads option is enabled(which is the default), the add callback will be called once for each file in the selection for XHR file uploads, with a data.files array length of one, as each file is uploaded individually.Else the add callback will be called once for each file selection.
	The upload starts when the submit method is invoked on the data parameter.
	data.submit() returns a Promise object and allows to attach additional handlers using jQuery's Deferred callbacks.
	The default add callback submits the files if the autoUpload option is set to true (the default for the basic plugin). It also handles processing of files before upload, if any process handlers have been registered. */
	add: (e, data) => void;

	/** Callback for the submit event of each file upload.
	If this callback returns false, the file upload request is not started. */
	submit: (e, data) => void;

	/** Callback for the start of each file upload request.
	If this callback returns false, the file upload request is aborted. */
	send: (e, data) => void;

	/** Callback for successful upload requests. This callback is the equivalent to the success callback provided by jQuery ajax() and will also be called if the server returns a JSON response with an error property. */
	done: (e, data) => void;

	/** Callback for failed (abort or error) upload requests. This callback is the equivalent to the error callback provided by jQuery ajax() and will not be called if the server returns a JSON response with an error property, as this counts as successful request due to the successful HTTP response. */
	fail: (e, data) => void;

	/** Callback for completed (success, abort or error) upload requests. This callback is the equivalent to the complete callback provided by jQuery ajax(). */
	always: (e, data) => void;

	/** Callback for upload progress events. */
	progress: (e, data) => void;

	/** Callback for global upload progress events. */
	progressAll: (e, data) => void;

	/** Callback for uploads start, equivalent to the global ajaxStart event (but for file upload requests only). */
	start: (e, data) => void;

	/** Callback for uploads stop, equivalent to the global ajaxStop event (but for file upload requests only). */
	stop: (e, data) => void;

	/** Callback for change events of the fileInput collection. */
	change: (e, data) => void;

	/** Callback for paste events to the dropZone collection. */
	paste: (e, data) => void;

	/** Callback for drop events of the dropZone collection. */
	drop: (e, data) => void;

	/** Callback for dragover events of the dropZone collection.
	To prevent the plugin from calling the preventDefault() method on the original dragover event object and setting the dataTransfer.dropEffect to copy, call the preventDefault() method on the event object of the fileuploaddragover callback: */
	dragover: (e, data) => void;

	/** Callback for the start of each chunk upload request.
	If this callback returns false, the chunk upload request is aborted. */
	chunksend: any;

	/** Callback for successful chunk upload requests. */
	chunkdone: any;

	/** Callback for failed (abort or error) chunk upload requests */
	chunkfail: any;

	/** Callback for completed (success, abort or error) chunk upload requests. */
	chunkalways: any;



	// FILE PROCESSING OPTIONS

	/** A list of file processing actions.
	Default: [] (empty array) */
	processQueue: Array<any>;



	// PROCESSING CALLBACK OPTIONS

	/** Callback for the start of the fileupload processing queue. */
	processstart: (e) => void;

	/** Callback for the start of an individual file processing queue. */
	process: (e, data) => void;

	/** Callback for the successful end of an individual file processing queue. */
	processdone: (e, data) => void;

	/** Callback for the failure of an individual file processing queue. */
	processfail: (e, data) => void;

	/** Callback for the end (done or fail) of an individual file processing queue. */
	processalways: (e, data) => void;

	/** Callback for the stop of the fileupload processing queue. */
	processstop: (e, data) => void;



	// IMAGE PREVIEW & RESIZE OPTIONS

	/** Disable parsing and storing the image header.
	Default: false */
	disableImageHead: boolean;

	/** Disable parsing Exif data.
	Default: false */
	disableExif: boolean;

	/** Disable parsing the Exif Thumbnail.
	Default: false */
	disableExifThumbnail: boolean;

	/** Disable parsing the Exif Sub IFD (additional Exif info).
	Default: false */
	disableExifSub: boolean;

	/** Disable parsing Exif Gps data.
	Default: false */
	disableExifGps: boolean;

	/** Disable parsing image meta data (image head and Exif data).
	Default: false */
	disableImageMetaDataLoad: boolean;

	/** Disables saving the image meta data into the resized images.
	Default: false */
	disableImageMetaDataSave: boolean;

	/** The regular expression for the types of images to load, matched against the file type.
	Type: Regular Expression
	Default: /^image\/(gif|jpeg|png)$/ */
	loadImageFileTypes: any;

	/** The maximum file size of images to load.
	Default: 10000000 */
	loadImageMaxFileSize: number;

	/** Don't revoke the object URL created to load the image.
	Default: false */
	loadImageNoRevoke: boolean;

	/** Disable loading and therefore processing of images.
	Default: false */
	disableImageLoad: boolean;

	/** The maximum width of resized images.
	Default: 5000000 */
	imageMaxWidth: number;

	/** The maximum height of resized images.
	Default: 5000000 */
	imageMaxHeight: number;

	/** The minimum width of resized images.
	Default: undefined */
	imageMinWidth: number;

	/** The minimum height of resized images.
	Default: undefined */
	imageMinHeight: number;

	/** Define if resized images should be cropped or only scaled.
	Default: false */
	imageCrop: boolean;

	/** Defines the image orientation (1-8) or takes the orientation value from Exif data if set to true.
	Type: integer or boolean
	Default: false */
	imageOrientation: any;

	/** If set to true, forces writing to and saving images from canvas, even if the original image fits the maximum image constraints.
	Type: integer or boolean
	Default: undefined */
	imageForceResize: any;

	/** Disables the resize image functionality.
	Type: boolean
	Default: true */
	disableImageResize: boolean;

	/** Sets the quality parameter given to the canvas.toBlob() call when saving resized images.
	Type: float
	Default: undefined */
	imageQuality: number;

	/** Sets the type parameter given to the canvas.toBlob() call when saving resized images.
	Default: The image type of the original file, e.g. image/jpg */
	imageType: string;

	/** The maximum width of the preview images.
	Default: 80 */
	previewMaxWidth: number;

	/** The maximum height of the preview images.
	Default: 80 */
	previewMaxHeight: number;

	/** The minimum width of preview images.
	Default: undefined */
	previewMinWidth: number;

	/** The minimum height of preview images.
	Default: undefined */
	previewMinHeight: number;

	/** Define if preview images should be cropped or only scaled.
	Default: false */
	previewCrop: boolean;

	/** Defines the preview orientation (1-8) or takes the orientation value from Exif data if set to true.
	Type: integer or boolean
	Default: true */
	previewOrientation: any;

	/** Create the preview using the Exif data thumbnail.
	Default: true */
	previewThumbnail: boolean;

	/** Define if preview images should be resized as canvas elements.
	Default: true */
	previewCanvas: boolean;

	/** Define the name of the property that the preview element is stored as on the File object.
	Default: 'preview' */
	imagePreviewName: string;

	/** Disables image previews.
	Default: false */
	disableImagePreview: boolean;



	// AUDIO PREVIEW OPTIONS

	/** The regular expression for the types of audio files to load, matched against the file type.
	Type: Regular Expression
	Default: /^audio\/.*$/ */
	loadAudioFileTypes: any;

	/** The maximum file size of audio files to load.
	Default: undefined */
	loadAudioMaxFileSize: number;

	/** Define the name of the property that the preview element is stored as on the File object.
	Default: 'preview' */
	audioPreviewName: string;

	/** Disable audio previews.
	Default: false */
	disableAudioPreview: boolean;



	// VIDEO PREVIEW OPTIONS

	/** The regular expression for the types of video files to load, matched against the file type.
	Type: Regular Expression
	Default: /^video\/.*$/ */
	loadVideoFileTypes: any;

	/** The maximum file size of video files to load.
	Default: undefined */
	loadVideoMaxFileSize: number;

	/** Define the name of the property that the preview element is stored as on the File object.
	Default: 'preview' */
	videoPreviewName: string;

	/** Disable video previews.
	Default: false */
	disableVideoPreview: boolean;



	// VALIDATION OPTIONS

	/** The regular expression for allowed file types, matches against either file type or file name as only browsers with support for the File API report the file type.
	Type: Regular Expression
	Default: undefined
	Example: /(\.|\/)(gif|jpe?g|png)$/i */
	acceptFileTypes: any;

	/** The maximum allowed file size in bytes.
	Default: undefined
	Example: 10000000 10 MB
	Note: This option has only an effect for browsers supporting the File API. */
	maxFileSize: number;

	/** The minimum allowed file size in bytes.
	Default: undefined
	Example: 1 // 1 Byte
	Note: This option has only an effect for browsers supporting the File API. */
	minFileSize: number;

	/** This option limits the number of files that are allowed to be uploaded using this widget.
	By default, unlimited file uploads are allowed.
	Note: The maxNumberOfFiles option depends on the getNumberOfFiles option, which is defined by the UI and AngularJS implementations. */
	maxNumberOfFiles: number;

	/** Disables file validation.
	Default: false */
	disableValidation: boolean;
}

interface JQueryFileUpload {
}

interface JQuery {
	fileupload(settings: JQueryFileUploadOptions): JQueryFileUpload;
}