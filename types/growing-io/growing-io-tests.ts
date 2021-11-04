// No npm package for wx-js-sdk, source location is: http://assets.giocdn.com/2.1/gio.js

gio('clearUserId');
gio('sendPage');

gio('setUserId', '1');
gio('app.set', 'key', 'value');
gio('people.set', 'key', 'value');
gio('page.set', 'key', 'value');
gio('visit.set', 'key', 'value');
gio('evar.set', 'key', 'value');

gio('app.set', {
    key: 'value',
});
gio('people.set', {
    key: 'value',
});
gio('page.set', {
    key: 'value',
});
gio('visit.set', {
    key: 'value',
});
gio('evar.set', {
    key: 'value',
});

gio('track', 'eventId');
gio('track', 'eventId', 1);
gio('track', 'eventId', {
    key: 'value',
});
gio('track', 'eventId', 1, {
    key: 'value',
});

gio('init', 'projectId', {});
gio('init', 'projectId');
gio('config', {});
