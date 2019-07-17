import * as path from 'path';

enum Endpoints {
    Friends = 'friends',
    FriendById = 'friend/:userId',
}

// Config docs: https://www.npmjs.com/package/apimocker#configuration
module.exports = {
    note: 'Friends API',
    allowedHeaders: ['Content-Type', 'Authorization'],
    mockDirectory: path.resolve(process.cwd(), 'types/apimocker'),
    port: process.env.PORT || '7878',
    quiet: false,
    latency: '1000',
    logRequestHeaders: true,
    corsCredentials: true,
    webServices: {
        [Endpoints.Friends]: {
            mockFile: 'forbidden.mock.json',
            verbs: ['get', 'post', 'put', 'delete'],
            contentType: 'application/json',
            responses: {
                get: { httpStatus: 200, mockFile: 'friends.mock.json' },
                post: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
                put: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
                delete: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
            },
        },
        [Endpoints.FriendById]: {
            mockFile: 'forbidden.mock.json',
            verbs: ['get' /*, 'post', 'put', 'delete'*/],
            contentType: 'application/json',
            switch: ['userId'],
            responses: {
                // get: { httpStatus: 200, mockFile: 'friends.mock.json' },
                post: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
                put: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
                delete: { httpStatus: 405, mockFile: 'forbidden.mock.json' },
            },
            jsonPathSwitchResponse: {
                jsonpath: '$[?(@.userId==#userId#)]',
                mockFile: 'friends.mock.json',
                forceFirstObject: false,
            },
        },
    },
};
