import mandrill = require('mandrill-api');

var M = new mandrill.Mandrill('key', false),
    cb: mandrill.ICallback = function(asd) {};

M.templates.add({
    name: '',
});
M.webhooks.delete({ id: 1 });
M.call('url', {}, cb, cb);

M.messages.sendTemplate({
    template_name: '',
    template_content: [],
    message: {
        to: [{email: ''}]
    },
});

M.messages.search({
    query: '',
    senders: [],
    limit: 100
});
