import easydate = require('easydate');

easydate('d/M/Y');
easydate('Y-d-M', {adjust: true, timeZone: 'local'});
easydate('d-M-Y @ h:m', '2015-11-03T16:06:00.000Z');
easydate('Y-d-M', {
    adjust: true,
    timeZone: 'utc',
    setDate: '2015-11-03T16:06:00.000Z'
});
