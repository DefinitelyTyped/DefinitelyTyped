/// <reference path="FilePreviews.d.ts" />

var previews = new FilePreviews({debug: false, apiKey: 'yourapikey'});
var url = 'url';

previews.generate(url, function(err:any, result:any) {
    if (result) {
        console.log(result.previewURL);
    }
});
