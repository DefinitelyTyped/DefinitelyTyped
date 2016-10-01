/// <reference path="jquery.ajaxFile.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../knockout/knockout.d.ts" />

function testRawApi(){
	var inputElement:HTMLInputElement = null;
	var resultPromise = AjaxFile.send<number>({
		method: 'POST',
		url: '/',
		desiredResponseDataType: JQueryAjaxFile.DataType.Json,
		files: [
			{ name: 'joeFile', element: inputElement }
		],
		data: {
			name: 'joe'
		},
		timeoutInSeconds: 30
	})
	.then(result => console.log('Result: ' + result.data), result => console.log('Error: ' + result.error))
	.done(result => console.log('Result: ' + result.data))
	.fail(result => console.log('Error: ' + result.error + " " + result.status.code + " " + result.status.text + " " + result.status.isSuccess))
	.always(result => console.log('end'))
	.abord();
}

function testJQuery() {
    var inputElement: HTMLInputElement = null;
    var extension: JQueryAjaxFile.IAjaxFileJQueryExtension = $.fn.ajaxWithFile;
    var option: JQueryAjaxFile.IJQueryOption = {
        type: 'POST',
        url: '/',
        dataType: "json",
        files: [
            { name: 'joeFile', element: inputElement }
        ],
        data: {
            name: 'joe'
        },
        success(result) { console.log('Result: ' + result); },
        error(jqXhr, textStatus, errorThrown) { console.log('Error: ' + errorThrown); },
        complete(jqXhr, textStatus) { console.log('end'); },
        global: true,
        timeout: 60
    };
    extension.ajaxWithFile<number>(option);
}

function testKnockoutExtension(){
	var fileHandler:KnockoutBindingHandler = ko.bindingHandlers.file;
}

testKnockoutExtension();
testJQuery();
testRawApi();