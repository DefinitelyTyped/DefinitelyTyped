import hash = require('object-hash');

var hashed: string;

var obj = { any: true };

// hash object
hashed = hash(obj);

hashed = hash.sha1(obj);
hashed = hash.keys(obj);
hashed = hash.MD5(obj);
hashed = hash.keysMD5(obj);

var options = {
	algorithm: 'md5',
	encoding: 'utf8',
	excludeValues: true,
	unorderedArrays: true
};

hashed = hash(obj, options);
