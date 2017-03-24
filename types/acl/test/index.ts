// Sample code from
// https://github.com/OptimalBits/node_acl/blob/master/Readme.md
import Acl = require('acl');

var report = <T>(err: Error, value: T) => {
  if (err) {
    console.error(err);
  }
  console.info(value);
};

// Using the memory backend
var acl = new Acl(new Acl.memoryBackend());

// middleware with no optional parameters
acl.middleware();

acl.middleware(1);

acl.middleware(1, () => {
  return "joed";
});

acl.middleware(1, () => {
  return 2;
});

acl.middleware(1, 'joed');

acl.middleware(3, 'joed', 'post');

// guest is allowed to view blogs
acl.allow('guest', 'blogs', 'view');

// allow function accepts arrays as any parameter
acl.allow('member', 'blogs', ['edit','view', 'delete']);

acl.addUserRoles('joed', 'guest');

acl.addRoleParents('baz', ['foo','bar']);

acl.allow('foo', ['blogs','forums','news'], ['view', 'delete']);

acl.allow('admin', ['blogs','forums'], '*');

acl.allow([
    {
        roles:['guest','special-member'],
        allows:[
            {resources:'blogs', permissions:'get'},
            {resources:['forums','news'], permissions:['get','put','delete']}
        ]
    },
    {
        roles:['gold','silver'],
        allows:[
            {resources:'cash', permissions:['sell','exchange']},
            {resources:['account','deposit'], permissions:['put','delete']}
        ]
    }
]);

acl.isAllowed('joed', 'blogs', 'view', (err, res) => {
    if (res) {
        console.log("User joed is allowed to view blogs");
    }
});

acl.isAllowed('jsmith', 'blogs', ['edit','view','delete'])
.then((result) => {
  console.dir('jsmith is allowed blogs ' + result);
  acl.addUserRoles('jsmith', 'member');
}).then(() =>
  acl.isAllowed('jsmith', 'blogs', ['edit','view','delete'])
).then((result) =>
  console.dir('jsmith is allowed blogs ' + result)
).then(() => {
  acl.allowedPermissions('james', ['blogs','forums'], report);
  acl.allowedPermissions('jsmith', ['blogs','forums'], report);
});
