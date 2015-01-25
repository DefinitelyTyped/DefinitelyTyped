/// <reference path="./rest.d.ts" />

import when = require('when');
import rest = require('rest');

import defaultRequest = require('rest/interceptor/defaultRequest');
import hateoas = require('rest/interceptor/hateoas');
import location = require('rest/interceptor/location');
import mime = require('rest/interceptor/mime');
import pathPrefix = require('rest/interceptor/pathPrefix');
import basicAuth = require('rest/interceptor/basicAuth');
import oAuth = require('rest/interceptor/oAuth');
import csrf = require('rest/interceptor/csrf');
import errorCode = require('rest/interceptor/errorCode');
import retry = require('rest/interceptor/retry');
import timeout = require('rest/interceptor/timeout');
import jsonp = require('rest/interceptor/jsonp');
import xdomain = require('rest/interceptor/ie/xdomain');
import xhr = require('rest/interceptor/ie/xhr');

import interceptor = require('rest/interceptor');
import registry = require('rest/mime/registry');

rest('/').then(function(response) {
    console.log('response: ', response);
});


var client = rest.wrap(mime);
client({ path: '/data.json' }).then(function(response) {
    console.log('response: ', response);
});

client = rest.wrap<mime.Config>(mime, { mime: 'application/json' }).wrap(errorCode, { code: 500 });
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

var noop = interceptor({
    init: (config: any) => {
        return config;
    },
    request: (request: rest.Request, config: any, meta: rest.Meta) => {
        return request;
    },
    response: (response: rest.Response, config: any, meta: rest.Meta) => {
        return response;
    },
    success: (response: rest.Response, config: any, meta: rest.Meta) => {
        return response;
    },
    error: (response: rest.Response, config: any, meta: rest.Meta) => {
        return response;
    }
});

var fail = interceptor({
    success: (response: rest.Response) => when.reject<rest.Response>(response),
});

var succeed = interceptor({
    error: (response: rest.Response) => when(response),
});

var defaulted = interceptor({
    init: (config: any) => {
        config.prop = config.prop || 'default-value';
        return config;
    },
});

interface KnownConfig {
    prop: string;
}
var knownConfig = interceptor({
    success: (response: rest.Response, config: KnownConfig) => {
        console.log(config);
        return response;
    },
});

var transformedConfig = interceptor({
    init: (config: KnownConfig) => {
        return config.prop;
    },
    success: (response: rest.Response, config: string) => {
        console.log(config);
        return response;
    },
});

var promiseOrResponse = interceptor({
    success: (response: rest.Response) => {
        return response;
    },
    error: (response: rest.Response) => {
        return when(response);
    },
});

client = rest
    .wrap(defaultRequest)
    .wrap(hateoas)
    .wrap(location)
    .wrap(mime)
    .wrap(pathPrefix)
    .wrap(basicAuth)
    .wrap(oAuth)
    .wrap(csrf)
    .wrap(errorCode)
    .wrap(retry)
    .wrap(timeout)
    .wrap(jsonp)
    .wrap(xdomain)
    .wrap(xhr)
    .wrap(noop)
    .wrap(fail)
    .wrap(knownConfig, { prop: 'value' })
    .wrap(transformedConfig, { prop: 'value' });
