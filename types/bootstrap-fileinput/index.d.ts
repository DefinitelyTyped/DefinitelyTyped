// Type definitions for bootstrap-fileinput 5.2
// Project: https://github.com/kartik-v/bootstrap-fileinput
// Definitions by: Ché Coxshall <https://github.com/CheCoxshall>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Zach Hall <https://github.com/zshall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

// tslint:disable:unified-signatures self-documenting code and JSDoc require non-unified signatures
interface JQuery<TElement = HTMLElement> {
    fileinput(options?: BootstrapFileInput.FileInputOptions): this;
    /**
     * Disable the file input
     */
    fileinput(method: 'disable'): this;
    /**
     * Enable the file input
     */
    fileinput(method: 'enable'): this;
    /**
     * Softer reset of the file input than the clear method.
     * It cleans up the preview thumbnails (except successful uploads and initialPreview) and cleans up the ajax upload file stack.
     */
    fileinput(method: 'reset'): this;
    /**
     * Destroys the file input plugin and reverts to a normal native file input
     */
    fileinput(method: 'destroy'): this;
    /**
     * Refreshes the file input plugin based on options provided
     */
    fileinput(method: 'refresh', options?: BootstrapFileInput.FileInputOptions): this;
    /**
     * Clear the file input.
     * This method clears the preview of all non-uploaded files, clears the ajax filestack, and also clears the native file input.
     */
    fileinput(method: 'clear'): this;
    /**
     * Trigger ajax upload of the files that are selected. Applicable only if `uploadUrl` is set.
     */
    fileinput(method: 'upload'): this;
    /**
     * Cancel an ongoing ajax upload of the files
     */
    fileinput(method: 'cancel'): this;
    /**
     * Pause an ongoing resumable ajax upload of the files (applicable only when `enableResumableUpload` property to `true`).
     */
    fileinput(method: 'pause'): this;
    /**
     * Resume a paused resumable ajax upload of the files (applicable only when enableResumableUpload property to true)
     */
    fileinput(method: 'resume'): this;
    /**
     * Locks the file input by disabling all actions/buttons except a cancel button to abort ongoing AJAX requests (for ajax uploads only).
     */
    fileinput(method: 'lock'): this;
    /**
     * Unlocks and enables the file input back again by reversing the outcome of the `lock` action
     */
    fileinput(method: 'unlock'): this;
    /**
     * This method pushes (appends) a file object to the cached file stack array for upload (note that this only adds files to the internal stack and does not update the preview)
     */
    fileinput(method: 'addToStack', fileObj: File, id?: string): this;
    /**
     * This method clears the entire file upload array stack (note that this only clears files from the internal stack and does not update the preview).
     */
    fileinput(method: 'clearFileStack'): this;
    /**
     * This method returns an object (associative array) containing the file objects selected indexed by file identifer (see `generateFileId` option).
     */
    fileinput(method: 'getFileStack'): BootstrapFileInput.FileStack;
    /**
     * This method returns an array of file objects (in case you do not wish to read an object/ associative array as returned by `getFileStack`)
     */
    fileinput(method: 'getFileList'): FileList;
    /**
     * This method returns the count of all files pending upload and files already uploaded (based on initial preview)
     */
    fileinput(method: 'getFilesCount', includeInitial?: boolean): number;
    /**
     * This method reads a FileList object, appends/pushes it to the file object stack, and also updates the preview to display the files based on the plugin settings.
     */
    fileinput(method: 'readFiles', files: FileList): this;
    /**
     * Zooms the content in detailed preview for the passed thumbnail frame id parameter.
     * @param frameId - the HTML identifier for the file preview thumbnail frame for which the exif data will be returned
     */
    fileinput(method: 'zoom', frameId: string): this;
    /**
     * Returns the initial preview content, the initial preview configuration, and initial preview thumb tags
     */
    fileinput(method: 'getPreview'): BootstrapFileInput.PreviewInfo;
    /**
     * Gets the exif data for the specified file thumbnail frame (applicable only for JPEG image file types).
     * The exif data is returned as an object using the `piexif.js` library.
     * @param frameId - the HTML identifier for the file preview thumbnail frame for which the exif data will be returned.
     */
    fileinput(method: 'getExif', frameId: string): object | null;
    /**
     * Returns the list of file preview thumbnail frames as jQuery objects.
     * @param cssFilter - additional CSS filter to be applied to restrict and return the relevant thumbnail preview frames
     */
    fileinput(method: 'getFrames', cssFilter?: string): this;
}
// tslint:enable:unified-signatures

declare namespace BootstrapFileInput {
    interface FileInputOptions {
        /**
         * Language configuration for the plugin to enable the plugin to display messages for your locale (you must set the ISO code for the language).
         * You can have multiple language widgets on the same page.
         * The locale JS file for the language code must be defined as mentioned in the translations section: http://plugins.krajee.com/file-input#translations
         */
        language?: string | undefined;

        /**
         * Theming
         */
        theme?: string | undefined;
        /**
         * Whether file selection is mandatory before upload (for ajax) or submit of the form (for non-ajax). When set to true, and if files are not
         * selected before upload, this will show the error message as set in msgFilerequired.
         * @default false
         */
        required?: boolean | undefined;
        /**
         * Whether to orient the widget in Right-To-Left (RTL) mode. To view RTL orientation you must set this to true and also must load the
         * css/fileinput-rtl.css file after the css/fileinput.css on your page for RTL styling.
         * @default false
         */
        rtl?: boolean | undefined;
        /**
         * Whether to hide the preview content (image, pdf content, text content, etc.) within the thumbnail.
         * When set to true, only the file name and file size as defined in the thumbnail footer layout template will be displayed.
         * @default false
         */
        hideThumbnailContent?: boolean | undefined;
        /**
         * Whether to encode all the URLs before triggering the ajax calls.
         * The following URLs are currently set and used within the plugin:
         *     * uploadUrl
         *     * deleteUrl
         *     * initialPreviewDownloadUrl
         *     * url within initialPreviewConfig
         *     * downloadUrl within initialPreviewConfig
         *     * testUrl within resumableUploadOptions
         * @default true
         */
        encodeUrl?: boolean | undefined;
        /**
         * Whether to focus the file caption after browsing and selecting a file.
         * @default true
         */
        focusCaptionOnBrowse?: boolean | undefined;
        /**
         * Whether to focus the file caption after clearing / removing the files (using the remove button for example).
         * @default true
         */
        focusCaptionOnClear?: boolean | undefined;
        /**
         * Whether to display the file caption.
         * @default true
         */
        showCaption?: boolean | undefined;
        /**
         * Whether to display the file preview.
         * @default true
         */
        showPreview?: boolean | undefined;
        /**
         * Whether to display the file remove/clear button.
         * @default true
         */
        showRemove?: boolean | undefined;
        /**
         * Whether to display the file upload button.
         * @default true
         * This will default to a form submit button, unless the uploadUrl is specified.
         */
        showUpload?: boolean | undefined;
        /**
         * Whether to display the file browse button. Defaults to true
         * @default true
         */
         showBrowse?: boolean | undefined;
        /**
         * Whether to display the file upload cancel button.
         * @default true
         * This will be only enabled and displayed when an AJAX upload is in process.
         */
        showCancel?: boolean | undefined;
        /**
         * Whether to display the close icon in the preview.
         * @default true
         * This will be only parsed when showPreview is true or when you are using the {close} tag in your preview templates.
         */
        showClose?: boolean | undefined;
        /**
         * Whether to persist display of the uploaded file thumbnails in the preview window (for ajax uploads) until the remove/clear button is pressed.
         * @default true
         * When set to false, a next batch of files selected for upload will clear these thumbnails from preview.
         */
        showUploadedThumbs?: boolean | undefined;
        /**
         * Whether to enable file browse/select on clicking of the preview zone.
         * @default false
         * @see {@link https://plugins.krajee.com/file-input/plugin-options#browseOnZoneClick}
         */
        browseOnZoneClick?: boolean | undefined;
        /**
         * Whether to automatically replace the files in the preview after the maxFileCount limit is reached and a new set of file(s) is/are selected.
         * This will only work if a valid maxFileCount is set.
         * @default false
         */
        autoReplace?: boolean | undefined;
        /**
         * Any additional CSS class to append to the caption container.
         */
        captionClass?: string | undefined;
        /**
         * Any additional CSS class to append to the preview container.
         */
        previewClass?: string | undefined;
        /**
         * Any additional CSS class to append to the main plugin container.
         */
        mainClass?: string | undefined;
        /**
         * The initial preview content to be displayed.
         * You can pass the minimal HTML markup for displaying your image, text, or file.
         * If set as a string, this will display a single file in the initial preview if there is no delimiter.
         * You can set a delimiter (as defined in initialDelimiter) to show multiple files in initial preview.
         * If set as an array, it will display all files in the array as an initial preview (useful for multiple file upload scenarios).
         * The following CSS classes will need to be added for displaying each file type as per the plugin style theme:
         * image files: Include CSS class file-preview-image
         * text files: Include CSS class file-preview-text
         * other files: Include CSS class file-preview-other
         */
        initialPreview?: string | any[] | undefined;
        /**
         * the count of initial preview items that will be added to the count of files selected in preview.
         * This is applicable when displaying the right caption, when overwriteInitial is set to false.
         */
        initialPreviewCount?: number | undefined;
        /**
         * the delimiter to be used for splitting the initial preview content as individual file thumbnails (applicable only if initialPreview is passed as a string instead of array).
         * Defaults to *$$*.
         */
        initialPreviewDelimiter?: string | undefined;
        /**
         * the configuration for setting up important properties for each initialPreview item (that is setup as part of initialPreview).
         */
        initialPreviewConfig?: PreviewConfig[] | undefined;
        /**
         * whether the delete button will be displayed for each thumbnail that has been created with initialPreview.
         */
        initialPreviewShowDelete?: boolean | undefined;
        /**
         * whether the file thumbnail should be removed from preview on error. Defaults to false.
         */
        removeFromPreviewOnError?: boolean | undefined;
        /**
         * this will be a list of tags used in thumbnail templates that will be replaced dynamically within the thumbnail markup, when the thumbnail is rendered.
         */
        previewThumbTags?: { [key: string]: string } | undefined;
        /**
         * this is an extension of previewThumbTags specifically for initial preview content - but will be configured as an array of objects corresponding to each initial preview thumbnail.
         * The initial preview thumbnails set via initialPreview will read this configuration for replacing tags.
         */
        initialPreviewThumbTags?: { [key: string]: string } | undefined;
        /**
         * the extra data that will be passed as data to the initial preview delete url/AJAX server call via POST.
         * This will be overridden by the initialPreviewConfig['extra'] property.
         * This property is only applicable for ajax deletions in initial preview and when you have set a value for initialPreviewConfig['url'] or deleteUrl.
         * This can be setup either as an object (associative array of keys and values) or as a function callback.
         * Note
         * The ajax delete action will send the following data to server via POST:
         *     key: the key setting as setup in initialPreviewConfig['key']
         *     any other extra data passed as key: value pairs either via initialPreviewConfig['extra'] OR deleteExtraData if former is not set.
         */
        deleteExtraData?: {} | { (): {} } | undefined;
        /**
         * the URL for deleting the image/content in the initial preview via AJAX post response. This will be overridden by the initialPreviewConfig['url'] property.
         * Note
         * The ajax delete action will send the following data to server via POST:
         *     key: the key setting as setup in initialPreviewConfig['key']
         *     any other extra data passed as key: value pairs either via initialPreviewConfig['extra'] OR deleteExtraData if former is not set.
         * You can also set deleteUrl as a function callback which will return a string. In that case, the function will get executed every time at runtime.
         * This will enable you to set a dynamically changing url based on runtime conditions.
         */
        deleteUrl?: string | (() => string) | undefined;
        /**
         * the initial preview caption text to be displayed.
         * If you do not set a value here and initialPreview is set to true this will default to "{preview-file-count} files selected",
         * where {preview-file-count} is the count of the files passed in initialPreview.
         */
        initialCaption?: string | undefined;
        /**
         * whether you wish to overwrite the initial preview content and caption setup.
         * This defaults to true, whereby, any initialPreview content set will be overwritten, when new file is uploaded or when files are cleared.
         * Setting it to false will help displaying a saved image or file from database always - useful especially when using the multiple file upload feature.
         */
        overwriteInitial?: boolean | undefined;
        /**
         * the templates configuration for rendering each part of the layout.
         */
        layoutTemplates?: LayoutTemplates | undefined;
        /**
         * the templates configuration for rendering each preview file type.
         */
        previewTemplates?: PreviewTemplates | undefined;
        /**
         * the list of allowed file types for upload.
         * This by default is set to null which means the plugin supports all file types for upload.
         * If an invalid file type is found, then a validation error message as set in msgInvalidFileType will be raised.
         * Note:
         * You need to be careful in case you are setting both allowedFileTypes and allowedFileExtensions.
         * In this case, the allowedFileTypes property is validated first and generally precedes the allowedFileExtensions setting (and the latter validation maybe skipped).
         */
        allowedFileTypes?: Array<'image' | 'html' | 'text' | 'video' | 'audio' | 'flash' | 'object'> | undefined;
        /**
         * the list of allowed file extensions for upload.
         * This by default is set to null which means the plugin supports all file extensions for upload.
         * If an invalid file extension is found, then a validation error message as set in msgInvalidFileExtension will be raised.
         * Note:
         * You need to be careful in case you are setting both allowedFileTypes and allowedFileExtensions.
         * In this case, the allowedFileTypes property is validated first and generally precedes the allowedFileExtensions setting (and the latter validation maybe skipped).
         */
        allowedFileExtensions?: string[] | undefined;
        /**
         * the list of allowed preview types for your widget.
         * This by default supports all file types for preview.
         * The plugin by default treats each file as an object if it does not match any of the previous types.
         * To disable this behavior, you can remove object from the list of allowedPreviewTypes OR fine tune it through allowedPreviewMimeTypes.
         * To disable content preview for all file-types and show the previewIcon instead as a thumbnail, set this to null, empty, or false.
         */
        allowedPreviewTypes?: Array<'image' | 'html' | 'text' | 'video' | 'audio' | 'flash' | 'object'> | undefined;
        /**
         * the list of allowed mime types for preview.
         * This is set to null by default which means all possible mime types are allowed.
         * This setting works in combination with allowedPreviewTypes to filter only the needed file types allowed for preview.
         */
        allowedPreviewMimeTypes?: string[] | undefined;
        /**
         * the default content / markup to show by default in the preview window whenever the files are cleared or the input is cleared.
         * This can be useful for use cases like showing the default user profile picture or profile image before upload to overwrite.
         * This is a bit different from initialPreview in the sense, that the initialPreview content will always be displayed unless it is deleted or overwritten based on overwriteInitial.
         * The defaultPreviewContent on the other hand will only be shown ONLY on initialization OR whenever you clear the preview.
         * At other times when files have been selected this will be overwritten temporarily until file(s) selected is/are cleared.
         * This property can be useful to display for example a default user profile picture (or saved picture) in the preview window unless the user selects a picture.
         */
        defaultPreviewContent?: string | undefined;
        /**
         * the list of additional custom tags that will be replaced in the layout templates.
         */
        customLayoutTags?: {} | undefined;
        /**
         * the list of additional custom tags that will be replaced in the preview templates.
         */
        customPreviewTags?: {} | undefined;
        /**
         * the format settings (width and height) for rendering each preview file type.
         */
        previewSettings?: PreviewSettings | undefined;
        /**
         * the settings to validate and identify each file type when a file is selected for upload.
         * This is a list of callbacks, which accepts the file mime type and file name as a parameter.
         */
        fileTypeSettings?: FileTypeSettings | undefined;
        /**
         * the icon to be shown in each preview file thumbnail when an unreadable file type for preview is detected. Defaults to <i class="glyphicon glyphicon-file"></i> &nbsp;.
         */
        previewFileIcon?: string | undefined;
        /**
         * the CSS class to be applied to the preview file icon container. Defaults to file-icon-4x.
         */
        previewFileIconClass?: string | undefined;
        /**
         * the preview icon markup settings for each file extension (type).
         * You need to set this as key: value pairs, where the key corresponds to a file extension (e.g. doc, docx, xls etc.), and the value corresponds to the markup of the icon to be rendered.
         * If this is not set OR a file extension is not set here, the preview will default to previewFileIcon.
         * Note that displaying the icons instead of file content is controlled via allowedPreviewTypes and allowedPreviewMimeTypes
         */
        previewFileIconSettings?: PreviewFileIconSettings | undefined;
        /**
         * the extensions to be auto derived for each file extension (type).
         * This is useful if you want to set the same icon for multiple file extension types.
         * You need to set this as `key: value` pairs, where the key corresponds to a file extension as set in previewFileIconSettings (e.g. doc, docx, xls etc.).
         * The value will be a function callback that accepts the following parameter:
         *     ext: string, the file extension (without the . [dot]) of the file currently selected in the preview.
         * You can configure the callback to match the set of file extensions (via regex or similar) for each `key` and return a boolean output if the file extension matches.
         */
        previewFileExtSettings?: PreviewFileExtSettings | undefined;
        /**
         * the CSS class for the each of the button labels for browse, remove, upload, and cancel.
         * Defaults to hidden-xs, which automatically hides the button labels for small screen devices and renders as smaller iconic buttons to fit to the screen.
         */
        buttonLabelClass?: string | undefined;
        /**
         * the label to display for the file picker/browse button. Defaults to Browse ….
         */
        browseLabel?: string | undefined;
        /**
         * the icon to display before the label for the file picker/browse button. Defaults to <i class="glyphicon glyphicon-folder-open"></i>&nbsp;.
         */
        browseIcon?: string | undefined;
        /**
         * the CSS class for the file picker/browse button. Defaults to btn btn-primary.
         */
        browseClass?: string | undefined;
        /**
         * the label to display for the file remove button. Defaults to Remove.
         */
        removeLabel?: string | undefined;
        /**
         * the icon to display before the label for the file picker/remove button. Defaults to <i class="glyphicon glyphicon-trash"></i> &nbsp;.
         */
        removeIcon?: string | undefined;
        /**
         * the CSS class for the file remove button. Defaults to btn btn-default.
         */
        removeClass?: string | undefined;
        /**
         * the title to display on hover for the file remove button. Defaults to Clear selected files.
         */
        removeTitle?: string | undefined;
        /**
         * the label to display for the file upload button. Defaults to Upload.
         */
        uploadLabel?: string | undefined;
        /**
         * the icon to display before the label for the file upload button. Defaults to <i class="glyphicon glyphicon-upload"></i> &nbsp;.
         */
        uploadIcon?: string | undefined;
        /**
         * the CSS class for the file upload button. Defaults to btn btn-default.
         */
        uploadClass?: string | undefined;
        /**
         * the title to display on hover for the file remove button.
         * Defaults to Upload selected files.
         */
        uploadTitle?: string | undefined;
        /**
         * the URL for the upload processing action (typically for ajax based processing).
         * Defaults to null.
         * If this is not set or null, then the upload button action will default to form submission.
         * NOTE:
         *     This is MANDATORY if you want to use advanced features like drag & drop, append/remove files, selectively upload files via ajax etc.
         *     The plugin automatically send $_FILES data to the server with the input `name` attribute as the key if provided.
         *     If input name is not set, the key defaults to file-data.
         * You can also set uploadUrl as a function callback which will return a string. In that case, the function will get executed at runtime
         * just before every ajax call. This will enable you to set a dynamic upload url based on runtime / dynamic conditions.
         */
        uploadUrl?: string | (() => string) | undefined;
        /**
         * the URL for the ajax upload processing action applicable when each individual file thumbnail is separately uploaded. Defaults to null.
         * If this is not set, this will default to the uploadUrl setting. This property is useful for synchronous uploads when uploadAsync is
         * set to false, and you want to set a different server action for batch upload via uploadUrl, but a different server action for single
         * file thumbnail upload via uploadUrlThumb.
         * You can also set uploadThumbUrl as a function callback which will return a string. In that case, the function will get executed at
         * runtime just before every ajax call. This will enable you to set a dynamic upload thumbnail url based on runtime / dynamic conditions.
         */
        uploadUrlThumb?: string | (() => string) | undefined;
        /**
         * whether the batch upload of multiple files will be asynchronous/in parallel.
         * @default true
         */
        uploadAsync?: boolean | undefined;
        /**
         * the extra data that will be passed as data to the url/AJAX server call via POST.
         * This property is only applicable for ajax uploads and when you have set a value for uploadUrl.
         * This can be setup either as an object (associative array of keys and values) or as a function callback.
         * As an object, it can be set for example as:
         *     { id: 100, value: '100 Details' }
         * Note that for uploading individual file via thumbnail, the function callback can also receive the thumbnail previewId and index as parameters. These are described below:
         *     previewId: the identifier for the preview file container (only available when uploading each thumbnail file)
         *     index: the zero-based sequential index of the loaded file in the preview list (only available when uploading each thumbnail file)
         */
        uploadExtraData?: {} | ((previewId?: string, index?: number) => {}) | undefined;
        /**
         * the minimum allowed image height in px if you are uploading image files.
         * Defaults to null which means no limit on image height.
         */
        minImageHeight?: number | undefined;
        /**
         * the maximum allowed image width in px if you are uploading image files.
         * Defaults to null which means no limit on image width.
         * Note that if you set resizeImage property to true, then the entire image will be resized within this width (depending on resizePreference).
         */
        maxImageWidth?: number | undefined;
        /**
         * the maximum allowed image height in px if you are uploading image files.
         * Defaults to null which means no limit on image height.
         * Note that if you set resizeImage property to true, then the entire image will be resized within this height (depending on resizePreference).
         */
        maxImageHeight?: number | undefined;
        /**
         * whether to add ability to resize uploaded images. Defaults to false.
         * Note that resizing images requires HTML5 canvas support which is supported on most modern browsers.
         * In addition, you must include the JavaScript-Canvas-to-Blob plugin by blueimp by including canvas-to-blob.js in your application.
         * This JS file must be loaded before fileinput.js on the page.
         * The JavaScript-Canvas-to-Blob source files are available in js/plugins folder of bootstrap-fileinput project page.
         * The canvas-to-blob.js plugin is a polyfill for canvas.toBlob method and is needed for allowing the resized image files via HTML5 canvas to be returned as a blob
         */
        resizeImage?: boolean | undefined;
        /**
         * preference to resize the image based on width or height.
         * Defaults to width.
         * This property is parsed only when resizeImage is true.
         * If set to width, the maxImageWidth property is first tested and if image size is greater than this, then the image is resized to maxImageWidth.
         * The image height is resized and adjusted in the same ratio as width.
         * In case, the image width is already less than maxImageWidth then the maxImageHeight property is used to resize and width is adjusted in same ratio.
         * This will behave conversely, when resizePreference is set to height - the maxImageHeight will be first tested against image height
         * and then the rest of steps will be similarly parsed with preference given to height instead of width as before.
         */
        resizePreference?: 'width' | 'height' | undefined;
        /**
         * the quality of the resized image. This must be a decimal number between 0.00 to 1.00.
         * Defaults to 0.92.
         */
        resizeImageQuality?: number | undefined;
        /**
         * the default image mime type of the converted image after resize.
         * Defaults to image/jpeg.
         */
        resizeDefaultImageType?: string | undefined;
        /**
         * the maximum file size for upload in KB.
         * If set to 0, it means size allowed is unlimited.
         * Defaults to 0.
         */
        maxFileSize?: number | undefined;
        /**
         * the minimum number of files allowed for each multiple upload.
         * If set to 0, it means number of files are optional.
         * Defaults to 0.
         */
        minFileCount?: number | undefined;
        /**
         * the maximum number of files allowed for each multiple upload.
         * If set to 0, it means number of files allowed is unlimited.
         * Defaults to 0.
         */
        maxFileCount?: number | undefined;
        /**
         * whether to include initial preview file count (server uploaded files) in validating minFileCount and maxFileCount.
         * @default false
         */
        validateInitialCount?: boolean | undefined;
        /**
         * the message that will be displayed when ZERO files are found.
         * Defaults to No.
         */
        msgNo?: string | undefined;
        /**
         * the message that will be displayed within the progress bar when file upload is aborted or cancelled.
         * Defaults to Cancelled.
         */
        msgCancelled?: string | undefined;
        /**
         * the title displayed (before the file name) on hover of the zoom button for zooming the file content in a modal window.
         * This is currently applicable only for text file previews.
         * Defaults to View details.
         */
        msgZoomTitle?: string | undefined;
        /**
         * the heading of the modal dialog that displays the zoomed file content.
         * This is currently applicable only for text file previews.
         * Defaults to Detailed Preview.
         */
        msgZoomModalHeading?: string | undefined;
        /**
         * the message to be displayed when the file size exceeds maximum size.
         * Defaults to:
         *     File "{name}" ({size} KB) exceeds maximum allowed upload size of {maxSize} KB. Please retry your upload!
         * where:
         *     {name}: will be replaced by the file name being uploaded
         *     {size}: will be replaced by the uploaded file size
         *     {maxSize}: will be replaced by the maxFileSize parameter.
         */
        msgSizeTooLarge?: string | undefined;
        /**
         * message to be displayed when the file count is less than the minimum count as set in minFileCount.
         * Defaults to:
         *     You must select at least {n} {files} to upload. Please retry your upload!
         * where:
         *     {n}: will be replaced by the allowed minimum files as set in minFileCount.
         *     {files}: will be replaced with fileSingle or filePlural properties in locale file depending on the minFileCount.
         */
        msgFilesTooLess?: string | undefined;
        /**
         * the message to be displayed when the file count exceeds maximum count as set in maxFileCount.
         * Defaults to:
         *     Number of files selected for upload ({n}) exceeds maximum allowed limit of {m}. Please retry your upload!
         * where:
         *     {n}: will be replaced by number of files selected for upload
         *     {m}: will be replaced by the allowed maximum files as set in maxFileCount
         */
        msgFilesTooMany?: string | undefined;
        /**
         * the exception message to be displayed when the file selected is not found by the FileReader.
         * Defaults to:
         *     File "{name}" not found!
         * where:
         *     {name}: will be replaced by the file name being uploaded
         */
        msgFileNotFound?: string | undefined;
        /**
         * the exception message to be displayed when the file selected is not allowed to be accessed due to a security exception.
         * Defaults to:
         *     Security restrictions prevent reading the file "{name}".
         * where:
         *     {name}: will be replaced by the file name being uploaded
         */
        msgFileSecured?: string | undefined;
        /**
         * the exception message to be displayed when the file selected is not readable by the FileReader API.
         * Defaults to:
         *     File "{name}" is not readable.
         * where:
         *     {name}: will be replaced by the file name being uploaded
         */
        msgFileNotReadable?: string | undefined;
        /**
         * the exception message to be displayed when the file preview upload is aborted.
         * Defaults to:
         *     File preview aborted for "{name}".
         * where:
         *     {name}: will be replaced by the file name being uploaded
         */
        msgFilePreviewAborted?: string | undefined;
        /**
         * the exception message to be displayed for any other error when previewing the file.
         * Defaults to:
         *     An error occurred while reading the file "{name}".
         * where:
         *     {name}: will be replaced by the file name being uploaded
         */
        msgFilePreviewError?: string | undefined;
        /**
         * the message to be displayed when the file type is not in one of the file types set in allowedFileTypes.
         * Defaults to:
         *     Invalid type for file "{name}". Only "{types}" files are supported.
         * where:
         *     {name}: will be replaced by the file name being uploaded
         *     {types}: will be replaced by the comma separated list of types defined in allowedFileTypes.
         */
        msgInvalidFileType?: string | undefined;
        /**
         * the message to be displayed when the file type is not in one of the file extensions set in allowedFileExtensions.
         * Defaults to:
         *     Invalid extension for file "{name}". Only "{extensions}" files are supported.
         * where:
         *     {name}: will be replaced by the file name being uploaded
         *     {extensions}: will be replaced by the comma separated list of extensions defined in allowedFileExtensions.
         */
        msgInvalidFileExtension?: string | undefined;
        /**
         * the message to be displayed when an ongoing ajax file upload is aborted by pressing the Cancel button.
         * Defaults to The file upload was aborted.
         * If this is set to null or empty, the internal ajax error message will be displayed - Defaults to File Upload Error.
         */
        msgUploadAborted?: string | undefined;
        /**
         * the exception message to be displayed within the caption container (instead of msgFilesSelected), when a validation error is encountered.
         * Defaults to File Upload Error.
         */
        msgValidationError?: string | undefined;
        /**
         * the css class for the validation error message displayed in the caption container.
         * Defaults to text-danger.
         */
        msgValidationErrorClass?: string | undefined;
        /**
         * the icon to be displayed before the validation error in the caption container.
         * Defaults to <i class="glyphicon glyphicon-exclamation-sign"></i>
         */
        msgValidationErrorIcon?: string | undefined;
        /**
         * the css class for the error message to be displayed in the preview window when the file size exceeds maxSize.
         * Defaults to file-error-message.
         */
        msgErrorClass?: string | undefined;
        /**
         * the message displayed when the files are getting read and loaded for preview.
         * Defaults to
         *     Loading file {index} of {files} …
         * The following special variables will be replaced:
         *     {index}: the sequence number of the current file being loaded.
         *     {files}: the total number of files selected for upload.
         */
        msgLoading?: string | undefined;
        /**
         * the progress message displayed as each file is loaded for preview.
         * Defaults to:
         *     Loading file {index} of {files} - {name} - {percent}% completed.
         * The following variables will be replaced:
         *     {index}: the sequence number of the current file being loaded.
         *     {files}: the total number of files selected for upload.
         *     {percent}: the percentage of file read and loaded.
         *     {name}: the name of the current file being loaded.
         */
        msgProgress?: string | undefined;
        /**
         * the progress message displayed in caption window when multiple (more than one) files are selected.
         * Defaults to:
         *     {n} files selected.
         * The following variables will be replaced:
         *     {n}: the number of files selected.
         */
        msgSelected?: string | undefined;
        /**
         * the message displayed when a folder has been dragged to the drop zone.
         * Defaults to:
         *     Drag & drop files only! {n} folder(s) dropped were skipped.
         * The following variables will be replaced:
         *     {n}: the number of folders dropped.
         */
        msgFoldersNotAllowed?: string | undefined;
        /**
         * the exception message to be displayed when the file selected for preview is an image and its width is less than the minImageWidth setting.
         * Defaults to:
         *     Width of image file "{name}" must be at least {size} px.
         * where:
         *     {name}: will be replaced by the file name being uploaded.
         *     {size}: will be replaced by the minImageWidth setting.
         */
        msgImageWidthSmall?: string | undefined;
        /**
         * the exception message to be displayed when the file selected for preview is an image and its height is less than the minImageHeight setting.
         * Defaults to:
         *     Height of image file "{name}" must be at least {size} px.
         * where:
         *     {name}: will be replaced by the file name being uploaded.
         *     {size}: will be replaced by the minImageHeight setting.
         */
        msgImageHeightSmall?: string | undefined;
        /**
         * the exception message to be displayed when the file selected for preview is an image and its width exceeds the maxImageWidth setting.
         * Defaults to:
         *     Width of image file "{name}" cannot exceed {size} px.
         * where:
         *     {name}: will be replaced by the file name being uploaded.
         *     {size}: will be replaced by the maxImageWidth setting.
         */
        msgImageWidthLarge?: string | undefined;
        /**
         * the exception message to be displayed when the file selected for preview is an image and its height exceeds the maxImageHeight setting.
         * Defaults to:
         *     Height of image file "{name}" cannot exceed {size} px.
         * where:
         *     {name}: will be replaced by the file name being uploaded.
         *     {size}: will be replaced by the maxImageHeight setting.
         */
        msgImageHeightLarge?: string | undefined;
        /**
         * the upload progress bar CSS class to be applied when AJAX upload is in process (applicable only for ajax uploads).
         * Defaults to progress-bar progress-bar-success progress-bar-striped active.
         */
        progressClass?: string | undefined;
        /**
         * the upload progress bar CSS class to be applied when AJAX upload is in process (applicable only for ajax uploads).
         * Defaults to progress-bar progress-bar-success progress-bar-striped active.
         */
        progressCompleteClass?: string | undefined;
        /**
         * the upload progress bar CSS class to be applied when AJAX upload is cancelled or aborted.
         * Defaults to progress-bar progress-bar-danger.
         */
        progressErrorClass?: string | undefined;
        /**
         * the type of files that are to be displayed in the preview window.
         * Defaults to image.
         * Can be one of the following:
         *     image: Only image type files will be shown in preview.
         *     text: Only text type files will be shown in preview.
         *     any: Both image and text files content will be shown in preview.
         * Files other than image or text will be displayed as a thumbnail with the filename in the preview window.
         */
        previewFileType?: 'image' | 'text' | 'any' | undefined;
        /**
         * the icon for zooming the file content in a new modal dialog.
         * This is currently applicable only for text file previews.
         * Defaults to <i class="glyphicon glyphicon-zoom-in"></i>
         */
        zoomIndicator?: string | undefined;
        /**
         * the identifier for the container element displaying the error (e.g. '#id').
         * If not set, will default to the container with CSS class kv-fileinput-error inside the preview container (identified by elPreviewContainer).
         * The msgErrorClass will be automatically appended to this container before displaying the error.
         */
        elErrorContainer?: string | undefined;
        /**
         * the identifier for the container element containing the caption (e.g. '#id').
         * If not set, will default to the container with CSS class file-caption inside the main plugin container.
         */
        elCaptionContainer?: string | undefined;
        /**
         * the identifier for the container element containing the caption text (e.g. '#id').
         * If not set, will default to the container with CSS class file-caption-name inside the main plugin container.
         */
        elCaptionText?: string | undefined;
        /**
         * the identifier for the container element containing the preview (e.g. '#id').
         * If not set, will default to the container with CSS class file-preview inside the main plugin container.
         */
        elPreviewContainer?: string | undefined;
        /**
         * the identifier for the element containing the preview image thumbnails (e.g. '#id').
         * If not set, will default to the container with CSS class file-preview-thumbnails inside the main plugin container.
         */
        elPreviewImage?: string | undefined;
        /**
         * the identifier for the element containing the preview progress status (e.g. '#id').
         * If not set, will default to the container with CSS class file-preview-status inside the main plugin container.
         */
        elPreviewStatus?: string | undefined;
        /**
         * a callback to convert the filename as a slug string eliminating special characters.
         * If not set, it will use the plugin's own internal slugDefault method.
         * This callback function includes the filename as parameter and must return a converted filename string.
         */
        slugCallback?: ((filename: string) => string) | undefined;
        /**
         * whether to enable a drag and drop zone for dragging and dropping files to.
         * This is available only for ajax based uploads.
         * @default true
         */
        dropZoneEnabled?: boolean | undefined;
        /**
         * title to be displayed in the drag and drop zone.
         * This is available only for ajax based uploads.
         * Defaults to:
         *     Drag & drop files here ….
         */
        dropZoneTitle?: string | undefined;
        /**
         * CSS class for the drag & drop zone title.
         * Defaults to file-drop-zone-title.
         */
        dropZoneTitleClass?: string | undefined;
        /**
         * configuration for setting up file actions for newly selected file thumbnails in the preview window.
         */
        fileActionSettings?: FileActionSettings | undefined;
        /**
         * markup for additional action buttons to display within the initial preview thumbnails (for example displaying an image edit button).
         * The following tag can be used in the markup and will be automatically replaced:
         *     {dataKey}: Will be replaced with the key set within initialPreviewConfig.
         */
        otherActionButtons?: string | undefined;
        /**
         * the encoding to be used while reading a text file.
         * Applicable only for previewing text files.
         * Defaults to UTF-8.
         */
        textEncoding?: string | undefined;
        /**
         * Callback to pre process upload which will return a converted or encrypted file content.
         * See {@link https://plugins.krajee.com/file-input/plugin-options#preProcessUpload}
         */
        preProcessUpload?: ((fileId: string, file: File) => File) | undefined;
        /**
         * additional ajax settings to pass to the plugin before submitting the ajax request for upload.
         * Applicable only for ajax uploads.
         * This can be useful to pass additional tokens to headers or one can use it for setting other ajax options for advanced cases.
         * Refer the jQuery ajax documentation for the various settings you can configure.
         */
        ajaxSettings?: JQueryAjaxSettings | undefined;
        /**
         * additional ajax settings to pass to the plugin before submitting the delete ajax request in each initial preview thumbnail.
         * Applicable only for ajax uploads.
         * This can be useful to pass additional tokens to headers or one can use it for setting other ajax options for advanced cases.
         * Refer the jQuery ajax documentation for the various settings you can configure.
         */
        ajaxDeleteSettings?: JQueryAjaxSettings | undefined;
        /**
         * whether to show details of the error stack from the server log when an error is encountered via ajax response.
         * @default true
         */
        showAjaxErrorDetails?: boolean | undefined;
        /**
         * whether to merge the ajax callback functions set in ajaxSettings with the default plugin callbacks for beforeSend, success, error, complete.
         * @default false
         * In addition to boolean false, the following string values can be set:
         * 'before': when set to 'before', the ajax callbacks set in ajaxSettings will be merged before the default plugin callback.
         * 'after': when set to 'after', the ajax callbacks set in ajaxSettings will be merged after the default plugin callback.
         */
        mergeAjaxCallbacks?: boolean | string;
        /**
         * whether to merge the ajax callback functions set in ajaxDeleteSettings with the default plugin callbacks for beforeSend, success, error, complete.
         * @default false
         * In addition to boolean false, the following string values can be set:
         * 'before': when set to 'before', the ajax callbacks set in ajaxDeleteSettings will be merged before the default plugin callback.
         * 'after': when set to 'after', the ajax callbacks set in ajaxDeleteSettings will be merged after the default plugin callback.
         */
         mergeAjaxDeleteCallbacks?: boolean | string;
         /**
          * whether the initial preview content set is to be parsed as data instead of raw markup.
          * @default false
          * for backward compatibility (prior to v4.3.2).
          */
         initialPreviewAsData?: boolean | undefined;
    }

    interface PreviewConfig {
        /**
         * the caption or filename to display for each initial preview item content.
         */
        caption: string;
        /**
         * the CSS width of the image/ content displayed.
         */
        width: string;
        /**
         * the URL for deleting the image/ content in the initial preview via AJAX post response.This will default to deleteUrl if not set.
         */
        url: string;
        /**
         * the key that will be passed as data to the url via AJAX POST.
         */
        key: string | {};
        /**
         * the additional frame css class to set for the file's thumbnail frame.
         */
        frameClass: string;
        /**
         * the HTML attribute settings (set as key:value pairs) for the thumbnail frame.
         */
        frameAttr: {};
        /**
         * the extra data that will be passed as data to the initial preview delete url / AJAX server call via POST.
         * This will default to deleteExtraData if not set.
         */
        extra: {} | (() => {});
    }

    interface PreviewInfo {
        readonly content: string[];
        readonly config: PreviewConfig[];
        readonly tags: string[];
    }

    interface LayoutTemplates {
        /**
         * the template for rendering the widget with caption.
         * The following tags will be parsed and replaced automatically:
         *     {class}: the CSS class as set in the mainClass property.
         *     {close}: will be replaced with the close (cross) icon (by default on top right of the preview window). The layout template to control this markup is layoutTemplates.close.
         *     {preview}: the content parsed by the previewTemplate and will be displayed only if showPreview is true.
         *     {caption}: the content parsed by the captionTemplate and will be displayed only if showCaption is true.
         *     {remove}: the file remove/clear button and will be displayed only if showRemove is true.
         *     {upload}: the file upload button and will be displayed only if showUpload is true.
         *     {cancel}: the file upload cancel button that will be displayed when AJAX upload is in process to abort the AJAX upload.
         *     {browse}: the main file browse button to select your files for input.
         */
        main1?: string | undefined;
        /**
         * the template for rendering the widget without caption.
         * The following tags will be parsed and replaced automatically:
         *     {class}: the CSS class as set in the mainClass property.
         *     {close}: will be replaced with the close (cross) icon (by default on top right of the preview window). The layout template to control this markup is layoutTemplates.close.
         *     {preview}: the content parsed by the previewTemplate and will be displayed only if showPreview is true.
         *     {caption}: the content parsed by the captionTemplate and will be displayed only if showCaption is true.
         *     {remove}: the file remove/clear button and will be displayed only if showRemove is true.
         *     {upload}: the file upload button and will be displayed only if showUpload is true.
         *     {cancel}: the file upload cancel button that will be displayed when AJAX upload is in process to abort the AJAX upload.
         *     {browse}: the main file browse button to select your files for input.
         */
        main2?: string | undefined;
        /**
         * the template for rendering the preview.
         * The following tags will be parsed and replaced automatically:
         *     {class}: the CSS class as set in the previewClass property.
         */
        preview?: string | undefined;
        /**
         * the icon to render before the caption text.
         */
        icon?: string | undefined;
        /**
         * the template for rendering the caption.
         * The following tags will be parsed and replaced automatically:
         *     {class}: the CSS class as set in the captionClass property.
         */
        caption?: string | undefined;
        /**
         * the template for rendering the modal (for text file preview zooming).
         */
        modal?: string | undefined;
        /**
         * the template for the progress bar when upload is in progress (for batch/mass uploads and within each preview thumbnail for async/single uploads).
         * The upload progress bar when displayed within each thumbnail will be wrapped inside a container having a CSS class of `file-thumb-progress`.
         * The following tags will be parsed and replaced automatically:
         *     {percent}: will be replaced with the upload progress percentage.
         */
        progress?: string | undefined;
        /**
         * the template for the footer section of each file preview thumbnail.
         * The following tags will be parsed and replaced automatically:
         *     {actions}: will be replaced with the output of the actions template.
         *     {class}: the CSS class as set in the progressClass or progressCompleteClass property (depending on the progress percentage).
         */
        footer?: string | undefined;
        /**
         * the template for the file action buttons to be displayed within the thumbnail footer.
         * The following tags will be parsed and replaced automatically:
         *     {upload}: will be replaced with the output of the actionUpload template.
         *     {delete}: will be replaced with the output of the actionDelete template.
         */
        actions?: string | undefined;
        /**
         * the template for the file delete action button within the thumbnail footer.
         * The following tags will be parsed and replaced automatically:
         *     {removeClass}: the css class for the remove button. Will be replaced with the removeClass set within fileActionSettings.
         *     {removeIcon}: the icon for the remove button. Will be replaced with the removeIcon set within fileActionSettings.
         *     {removeTitle}: the title to display on hover for the remove button. Will be replaced with the removeTitle set within fileActionSettings.
         *     {dataUrl}: the URL for deleting the file thumbnail for initialPreview content only. Will be replaced with the url set within initialPreviewConfig.
         *     {dataKey}: the key (additional data) that will be passed to the URL above via POST to the AJAX call. Will be replaced with the key set within initialPreviewConfig.
         */
        actionDelete?: string | undefined;
        /**
         * the template for the file upload action button within the thumbnail footer.
         * The following tags will be parsed and replaced automatically:
         *     {uploadClass}: the css class for the upload button. Will be replaced with the uploadClass set within fileActionSettings.
         *     {uploadIcon}: the icon for the upload button. Will be replaced with the uploadIcon set within fileActionSettings.
         *     {uploadTitle}: the title to display on hover for the upload button. Will be replaced with the uploadTitle set within fileActionSettings.
         */
        actionUpload?: string | undefined;
        /**
         * The template for upload, remove, and cancel buttons.
         * The following tags will be parsed and replaced automatically:
         *     {type}: the HTML button type, defaults to button for most buttons and submit for form based uploads.
         *     {title}: the title to display on button hover.
         *     {css}: the CSS class for the button. This is derived from settings for uploadClass or removeClass or cancelClass.
         *     {status}: the disabled status for the button if available (else will be blank).
         *     {icon}: the button icon as identified by uploadIcon or removeIcon or cancelIcon.
         *     {label}: the button label as identified by uploadLabel or removeLabel or cancelLabel.
         */
        btnDefault?: string | undefined;
        /**
         * The template for upload button when used with ajax (i.e. when uploadUrl is set).
         * The following tags will be parsed and replaced automatically:
         *     {type}: the HTML button type, defaults to button for most buttons and submit for form based uploads.
         *     {title}: the title to display on button hover.
         *     {css}: the CSS class for the button. This is derived from settings for uploadClass.
         *     {status}: the disabled status for the button if available (else will be blank).
         *     {icon}: the button icon as identified by uploadIcon.
         *     {label}: the button label as identified by uploadLabel.
         *     {href}: applicable only for Upload button for ajax uploads and will be replaced with the uploadUrl property.
         */
        btnLink?: string | undefined;
        /**
         * The template for the browse button.
         *     {type}: the HTML button type, defaults to button for most buttons and submit for form based uploads.
         *     {title}: the title to display on button hover.
         *     {css}: the CSS class for the button. This is derived from settings for browseClass.
         *     {status}: the disabled status for the button if available (else will be blank).
         *     {icon}: the button icon as identified by browseIcon.
         *     {label}: the button label as identified by browseLabel.
         */
        btnBrowse?: string | undefined;
    }

    interface PreviewTemplates {
        /**
         * the preview template for image files.
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        image?: string | undefined;
        /**
         * the preview template for text files.
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         *     {dialog}: Will be replaced with the JS code to launch the modal dialog.
         *     {zoomTitle}: This will be replaced with the msgZoomTitle property. This is the title that is displayed on hover of the zoom button (which on clicking will display the text file).
         *     {zoomInd}: This will be replaced with the zoomIndicator property. This is the title that is displayed on hover of the zoom button (which on clicking will display the text file).
         *     {heading}: This represents the modal dialog heading title. This will be replaced with the msgZoomModalHeading property.
         */
        text?: string | undefined;
        /**
         * the preview template for html files.
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        html?: string | undefined;
        /**
         * the preview template for video files (supported by HTML 5 video tag).
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        video?: string | undefined;
        /**
         * the preview template for audio files (supported by HTML 5 audio tag).
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        audio?: string | undefined;
        /**
         * the preview template for flash files (supported currently on webkit browsers).
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        flash?: string | undefined;
        /**
         * the preview template for all other files - by default treated as object. To disable this behavior, configure the allowedPreviewTypes property.
         * The following tags will be parsed and replaced automatically:
         *     {previewId}: will be replaced with the generated identifier for the preview frame container.
         *     {data}: will be replaced with the data source for each preview type.
         *     {width}: will be replaced with the width for the file type as set in previewSettings.
         *     {height}: will be replaced with the height for the file type as set in previewSettings.
         *     {caption}: will be replaced with the file name.
         *     {type}: will be replaced with the file type.
         */
        object?: string | undefined;
        /**
         * this template is used ONLY for rendering the initialPreview markup content passed directly as a raw format.
         * The following tags will be parsed and replaced automatically:
         *     {content}: will be replaced with the raw HTML markup as set in initialPreview..
         */
        generic?: string | undefined;
    }

    interface PreviewSettings {
        image?: { width?: string | undefined; height?: string | undefined } | undefined;
        html?: { width?: string | undefined; height?: string | undefined } | undefined;
        text?: { width?: string | undefined; height?: string | undefined } | undefined;
        video?: { width?: string | undefined; height?: string | undefined } | undefined;
        audio?: { width?: string | undefined; height?: string | undefined } | undefined;
        flash?: { width?: string | undefined; height?: string | undefined } | undefined;
        object?: { width?: string | undefined; height?: string | undefined } | undefined;
        other?: { width?: string | undefined; height?: string | undefined } | undefined;
    }

    interface FileTypeSettings {
        image: (vType: string, vName: string) => boolean;
        html: (vType: string, vName: string) => boolean;
        text: (vType: string, vName: string) => boolean;
        video: (vType: string, vName: string) => boolean;
        audio: (vType: string, vName: string) => boolean;
        flash: (vType: string, vName: string) => boolean;
        object: (vType: string, vName: string) => boolean;
        other: (vType: string, vName: string) => boolean;
    }

    interface PreviewFileIconSettings {
        [key: string]: string;
    }

    interface PreviewFileExtSettings {
        [key: string]: (ext: string) => boolean;
    }

    interface FileActionSettings {
        /**
         * icon for remove button to be displayed in each file thumbnail.
         */
        removeIcon?: string | undefined;
        /**
         * CSS class for the remove button in each file thumbnail.
         */
        removeClass?: string | undefined;
        /**
         * title for remove button in each file thumbnail.
         */
        removeTitle?: string | undefined;
        /**
         * whether to show the upload button in the thumbnail.
         * @default true // will be always false for resumable uploads
         */
        showUpload?: boolean | (() => boolean) | undefined;
        /**
         * whether to show the download button in the thumbnail.
         * @default true
         */
        showDownload?: boolean | (() => boolean) | undefined;
        /**
         * whether to show the remove button in the thumbnail.
         * @default true
         */
        showRemove?: boolean | (() => boolean) | undefined;
        /**
         * whether to show the zoom button in the thumbnail.
         * @default true
         */
        showZoom?: boolean | (() => boolean) | undefined;
        /**
         * whether to show the drag button in the thumbnail (applicable only for initial preview content)
         * @default true
         */
        showDrag?: boolean | (() => boolean) | undefined;
        /**
         * icon for upload button to be displayed in each file thumbnail.
         */
        uploadIcon?: string | undefined;
        /**
         * CSS class for the remove button in each file thumbnail.
         */
        uploadClass?: string | undefined;
        /**
         * title for remove button in each file thumbnail.
         */
        uploadTitle?: string | undefined;
        /**
         * title to be displayed for upload button after an upload error is encountered from the server to allow retry of the upload.
         * This will be rendered in such a case for the errored file thumbnail when retryErrorUploads is set to true.
         */
        uploadRetryIcon?: string | undefined;
        /**
         * icon for download button to be displayed in each file thumbnail.
         */
        downloadIcon?: string | undefined;
        /**
         * CSS class for the download button in each file thumbnail.
         */
        downloadClass?: string | undefined;
        /**
         * title for download button in each file thumbnail.
         */
        downloadTitle?: string | undefined;
        /**
         * icon for zoom button to be displayed in each file thumbnail (to zoom thumbnail content to a detailed modal preview).
         */
        zoomIcon?: string | undefined;
        /**
         * CSS class for the zoom button in each file thumbnail (to zoom thumbnail content to a detailed modal preview).
         */
        zoomClass?: string | undefined;
        /**
         * title for zoom button in each file thumbnail (to zoom thumbnail content to a detailed modal preview).
         */
        zoomTitle?: string | undefined;
        /**
         * icon for drag button to be displayed in each file thumbnail (to sort / rearrange items in initial preview).
         */
        dragIcon?: string | undefined;
        /**
         * CSS class for the drag button in each file thumbnail (to sort / rearrange items in initial preview).
         */
        dragClass?: string | undefined;
        /**
         * title for drag button in each file thumbnail (to sort / rearrange items in initial preview).
         */
        dragTitle?: string | undefined;
        /**
         * the configuration for the Sortable plugin that will allow you to control the drag settings.
         */
        dragSettings?: object | undefined;
        /**
         * an indicator (HTML markup) for new pending upload displayed in each file thumbnail.
         */
        indicatorNew?: string | undefined;
        /**
         * an indicator (HTML markup) for successful upload displayed in each file thumbnail.
         */
        indicatorSuccess?: string | undefined;
        /**
         * an indicator (HTML markup) for error in upload displayed in each file thumbnail.
         */
        indicatorError?: string | undefined;
        /**
         * an indicator (HTML markup) for ongoing upload displayed in each file thumbnail.
         */
        indicatorLoading?: string | undefined;
        /**
         * an indicator (HTML markup) for paused upload displayed in each file thumbnail (applicable for resumable uploads when enableResumableUpload property to true).
         */
        indicatorPaused?: string | undefined;
        /**
         * title to display on hover of indicator for new pending upload in each file thumbnail.
         */
        indicatorNewTitle?: string | undefined;
        /**
         * title to display on hover of indicator for successful in each file thumbnail.
         */
        indicatorSuccessTitle?: string | undefined;
        /**
         * title to display on hover of indicator for error in upload in each file thumbnail.
         */
        indicatorErrorTitle?: string | undefined;
        /**
         * title to display on hover of indicator for ongoing upload in each file thumbnail.
         */
        indicatorLoadingTitle?: string | undefined;
        /**
         * title to display on hover of indicator for paused upload in each file thumbnail (applicable for resumable uploads when enableResumableUpload property to true).
         */
        indicatorPausedTitle?: string | undefined;
    }

    interface FileStack {
        [fileId: string]: File;
    }
}
