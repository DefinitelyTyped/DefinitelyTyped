

import express = require('express');
import minify = require('express-minify');
import uglifyJS = require('uglify-js');

var app = express();
app.use(minify());
app.use(minify({
    cache: false,
    cssmin: require('cssmin'),
    uglifyJS: require('uglify-js')
}));

app.get('/', function (req: express.Request, res: express.Response) {
    res._skip = true;
    res._no_minify = false;
    res._no_cache = true;
    res._uglifyMangle = false;
    
    var outputOptions: uglifyJS.BeautifierOptions = {
        beautify: true,
        comments: false
    };
    
    res._uglifyOutput = outputOptions;
    
    res._uglifyCompress = false;
    
    var compressionOptions: uglifyJS.CompressorOptions = {
        cascade: true
    };
    
    res._uglifyCompress = compressionOptions;
})
