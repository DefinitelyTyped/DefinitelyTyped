import CID = require('./index');

const cid = new CID('foo');
const anotherCid = new CID('1', 'sha1', Buffer.from('0x'));
const yetAnother = new CID(cid);

let serialized = cid.toJSON();
// CID is assignable to SerializedCID
serialized = cid;
