import muri = require('muri');

const parsed = {
    authenticated: {
        default: muri('mongodb://admin@locahost'),
        user: muri('mongodb://admin@localhost:27017/test'),
        userAndPass: muri('mongodb://admin:password@localhost:27017/test'),
    },
    replset: {
        default: muri('mongodb://localhost:27017,localhost:27018,localhost:27019/test?replicaSet=replset'),
        ssl: muri('mongodb://localhost:27017,localhost:27018,localhost:27019/test?replicaSet=replset&ssl=true'),
    },
    simple: {
        default: muri('mongodb://localhost'),
        portSpecified: muri('mongodb://localhost:27017/test'),
    },
    unixSocket: {
        default: muri('mongodb://local.sock'),
    },
};
