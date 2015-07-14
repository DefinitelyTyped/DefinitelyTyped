/// <reference path="jquery.fileupload.d.ts" />

/* 
* Handle the event of adding a file to the jQuery Upload plugin.
*
*/
var __handleAddingFile = function (event:any, data:any) 
{
    event.preventDefault();

    // [PERFORM VALIDATION]
    // If the data is valid submit the document
    data.submit();    
};

class TestFileInput {

	// The whole body will be the container for this test
	$el = $('body');

	// Reference to the whole jQueryFileUpload object of the class
	fileInput:JQueryFileUpload;

	constructor() {

		// The file upload object receives a fileInputOptions configuration object
		this.fileInput = <JQueryFileUpload>this.$el.fileupload({
            
            dataType: 'json',

            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: 1,
            
            add: __handleAddingFile
            
        }).on('fileuploadadd', '.daUpload', function (e, data) {
            }).on('fileuploadprocessalways', '.daUpload', (e, data) => {
            }).on('fileuploadprogressall', '.daUpload', function (e, data) {
            }).on('fileuploaddone', '.daUpload', (e, data) => {
            }).on('fileuploadfail', '.daUpload', (e, data) => {
            });
    }
}
