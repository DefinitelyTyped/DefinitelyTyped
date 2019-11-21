import { OAuth2 } from 'oauth';

import http = require('http');
import qs = require('querystring');

const clientID = '';
const clientSecret = '';
const oauth2 = new OAuth2(clientID,
                        clientSecret,
                        'https://github.com/',
                        'login/oauth/authorize',
                        'login/oauth/access_token');

http.createServer((req, res) => {
    const p: string[] = [];
    if (req.url) {
      req.url.split('/');
    }
    const pLen = p.length;

    /**
     * Authorised url as per github docs:
     * https://developer.github.com/v3/oauth/#redirect-users-to-request-github-access
     *
     * getAuthorizedUrl: https://github.com/ciaranj/node-oauth/blob/master/lib/oauth2.js#L148
     * Adding params to authorize url with fields as mentioned in github docs
     *
     */
    const authURL = oauth2.getAuthorizeUrl({
        redirect_uri: 'http://localhost:8080/code',
        scope: ['repo', 'user'],
        state: 'some random string to protect against cross-site request forgery attacks'
    });

    /**
     * Creating an anchor with authURL as href and sending as response
     */
    const body = `<a href="${authURL}"> Get Code </a>`;
    if (pLen === 2 && p[1] === '') {
        res.writeHead(200, {
            'Content-Length': body.length,
            'Content-Type': 'text/html' });
        res.end(body);
    } else if (pLen === 2 && p[1].indexOf('code') === 0) {
        /** Github sends auth code so that access_token can be obtained */
        /** To obtain and parse code='...' from code?code='...' */
        const qsObj = qs.parse(p[1].split('?')[1]) as { code: string };

        /** Obtaining access_token */
        oauth2.getOAuthAccessToken(
            qsObj['code'],
            {redirect_uri: 'http://localhost:8080/code/'},
            (e, access_token, refresh_token, results) => {
                if (e) {
                    console.log(e);
                    res.end(e);
                } else if (results.error) {
                    console.log(results);
                    res.end(JSON.stringify(results));
                } else {
                    console.log('Obtained access_token: ', access_token);
                    res.end(access_token);
                }
        });
    } else {
        // Unhandled url
    }
}).listen(8080);
