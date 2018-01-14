import CanCan = require('cancan');

const cancan = new CanCan();

// $ExpectType void
cancan.allow('admin', 'manage', 'all');

// $ExpectType void
cancan.allow('user', 'read', 'post', {public: true});

// $ExpectType boolean
cancan.can('user', 'read', 'post');

// $ExpectType boolean
cancan.cannot('user', 'delete', 'post');

// $ExpectType void
cancan.authorize('user', 'delete', 'post');

// $ExpectType boolean
cancan.can('user', 'read', 'post', {fields: ['title']});

// $ExpectType boolean
cancan.cannot('user', 'delete', 'post', {fields: ['title']});

// $ExpectType void
cancan.authorize('user', 'delete', 'post', {fields: ['title']});

const cancanWithOption = new CanCan({
    instanceOf: (_instance, _model) => true,
    createError: () => true
});
