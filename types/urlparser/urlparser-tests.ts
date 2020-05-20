import url = require('urlparser');

const u = url.parse('http://user:pass@kaerus.com/login?x=42');
u.host.hostname = 'database.kaerus.com';
u.host.password = 'secret';
u.host.port = 8529;
u.query.parts.push('a=13');
u.toString();
