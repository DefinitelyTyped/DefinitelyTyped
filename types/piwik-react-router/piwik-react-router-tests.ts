import PiwikReactRouter = require('piwik-react-router');

const piwik = PiwikReactRouter({
    url: 'your-piwik-url.com',
    siteId: '12345',
});

piwik.setUserId('userId');

piwik.push({ arg1: 1, arg2: 2 });

piwik.trackError({ message: 'message', filename: 'filename', lineno: 'lineno' }, 'EventName');
