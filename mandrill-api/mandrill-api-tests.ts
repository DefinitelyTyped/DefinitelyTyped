
import mandrill = require('mandrill-api');

var
    M = new mandrill.Mandrill('key', false),
    cb: mandrill.ICallback = function(asd){

    };


M.templates.add({});
M.webhooks.delete({id: 1});
M.call('url', {}, cb, cb);