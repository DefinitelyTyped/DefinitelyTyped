

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

var options: JQueryFileInputOptions = {
    dataType: 'json',
    singleFileUploads: true,
    limitMultiFileUploads: 1,
    add: __handleAddingFile,
    done: (e, data) => {
       data.result;
       data.jqXHR;
       data.textStatus;
    }
}

class TestFileInput {

	// The whole body will be the container for this test
	$el = $('body');

	// Reference to the whole jQueryFileUpload object of the class
	fileInput:JQueryFileUpload;

	constructor() {

		// The file upload object receives a fileInputOptions configuration object
		this.fileInput = <JQueryFileUpload>this.$el.fileupload(options);
    }
}
