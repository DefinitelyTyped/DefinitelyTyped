/// <reference path="FilePreviews.d.ts" />

var previews = new FilePreviews({debug: false, apiKey: 'yourapikey'});

previews.generate(url, function(err, result) {
    if (result) {
        console.log(result.previewURL);
    }
});
