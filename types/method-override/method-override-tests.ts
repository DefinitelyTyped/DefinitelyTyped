import express = require('express');
import methodOverride = require('method-override');

var app = express();

function hasMethod(body: any): body is { _method: string } {
    return (typeof body === 'object' && '_method' in body && typeof body._method === 'string');
}

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-HTTP-Method-Override', { methods: ["GET", 'POST'] }));
app.use(methodOverride((req: express.Request, res: express.Response) => {
    if (hasMethod(req.body)) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));
