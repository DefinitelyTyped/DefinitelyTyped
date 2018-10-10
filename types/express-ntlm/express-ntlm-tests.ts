import express = require('express');
import ntlm = require('express-ntlm');

const app = express();

app.use(ntlm({
    debug() {
        const args = Array.prototype.slice.apply(arguments);
        console.log.apply(null, args);
    },
    domain: 'MYDOMAIN',
    domaincontroller: 'ldap://myad.example',

    // use different port (default: 389)
    // domaincontroller: 'ldap://myad.example:3899',
}));

app.all('*', (request, response) => {
    response.end(JSON.stringify(request.ntlm)); // {"DomainName":"MYDOMAIN","UserName":"MYUSER","Workstation":"MYWORKSTATION"}
});

app.listen(80);
