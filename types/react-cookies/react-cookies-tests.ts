import reactCookies = require('react-cookies');
import cookie = require('cookie');
import express = require('express');

reactCookies.load('token');
reactCookies.load('token', true);
reactCookies.load('token', false);

reactCookies.loadAll();
reactCookies.loadAll(true);
reactCookies.loadAll(false);

reactCookies.select(/\btest(er|ing|ed|s)?\b/g);
reactCookies.select();

const options: cookie.CookieSerializeOptions = {
    path: '/',
    expires: new Date(),
    maxAge: 200,
    domain: 'example.com',
    secure: false,
    httpOnly: false,
    sameSite: 'strict',
};

reactCookies.save('cookie', 'value', options);
reactCookies.save('cookie', 1231, options);
reactCookies.save('cookie', { key: 'value' }, options);

reactCookies.remove('userId', { path: '/' });

const app = express();
app.use((err: any, req: express.Request, res: express.Response) => {
    const unplug = reactCookies.plugToRequest(req, res);
    unplug();
});

reactCookies.setRawCookie('Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;');
