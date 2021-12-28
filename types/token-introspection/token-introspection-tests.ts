import TokenIntrospection = require('token-introspection');

// Dummy token from jwt.io
const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// Adapted from README

const tokenIntrospection = TokenIntrospection({
    endpoint: 'https://example.com/introspect',
    client_id: '<Client ID>',
    client_secret: '<Client Secret>',
});

tokenIntrospection(token).then(console.log).catch(console.warn);

import fetch, { RequestInit } from 'node-fetch';

const proxyUrl = 'http://proxy:80';

const customFetch = (endpoint: string, options: RequestInit) => {
    process.env.HTTPS_PROXY = proxyUrl;
    return fetch(endpoint, options);
};

const customIntrospector = TokenIntrospection({
    endpoint: 'https://example.com/introspect',
    fetch: customFetch,
});

customIntrospector(token).then(console.log);

const fetchIntrospector = TokenIntrospection({
    endpoint: 'https://example.com/introspect',
    fetch,
});

fetchIntrospector(token).then(console.log);

// Use local/remote introspection explicitly

import LocalTokenIntrospection = require('token-introspection/local-introspection');

const local = LocalTokenIntrospection({ jwks_uri: 'https://example.com/jwks' });
local(token).then(console.log);

import RemoteTokenIntrospection = require('token-introspection/remote-introspection');

const remote = RemoteTokenIntrospection({ endpoint: 'https://example.com/introspect' });
remote(token).then(console.log);

// Check the errors

import {
    ConfigurationError,
    IntrospectionError,
    MalformedTokenError,
    NotBeforeError,
    TokenExpiredError,
    TokenNotActiveError,
} from 'token-introspection/errors';

new ConfigurationError('dummy message');
new IntrospectionError('dummy message');
new MalformedTokenError('dummy message');
new NotBeforeError('dummy message');
new TokenExpiredError('dummy message');
new TokenNotActiveError('dummy message');
