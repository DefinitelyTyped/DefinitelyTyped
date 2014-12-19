/// <reference path="./rest.d.ts" />

import rest = require('rest');
import mime = require('rest/interceptor/mime');
import errorCode = require('rest/interceptor/errorCode');
import registry = require('rest/mime/registry');

rest('/').then(function(response) {
    console.log('response: ', response);
});


var client = rest.wrap(mime);
client({ path: '/data.json' }).then(function(response) {
    console.log('response: ', response);
});

client = rest.wrap(mime, { mime: 'application/json' }).wrap(errorCode, { code: 500 });
client({ path: '/data.json' }).then(
    function(response) {
        console.log('response: ', response);
    },
    function(response) {
        console.error('response error: ', response);
    }
);

registry.register('application/vnd.com.example', {
    read: function(str: string) {
        var obj: any;
        // do string to object conversions
        return obj;
    },
    write: function(obj: any) {
        var str: string;
        // do object to string conversions
        return str;
    }
});

