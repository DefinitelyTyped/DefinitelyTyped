// https://github.com/OptimalBits/node_acl/blob/master/Readme.md
import Acl = require('acl');
import mongodb = require('mongodb');

declare var db: mongodb.Db;

// Using the mongo db backend
var acl = new Acl(new Acl.mongodbBackend(db, 'acl_', true));

// guest is allowed to view blogs
acl.allow('guest', 'blogs', 'view');

// allow function accepts arrays as any parameter
acl.allow('member', 'blogs', ['edit','view', 'delete']);
