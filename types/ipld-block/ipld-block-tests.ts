import Block = require('ipld-block');
import CID = require('cids');

Block.isBlock(null); // $ExpectType boolean

new Block(null, new CID('')); // $ExpectError
new Block(new Buffer(''), null); // $ExpectError

const testBlock = new Block(
    Buffer.from('0000'),
    new CID('bafybeig6xv5nwphfmvcnektpnojts33jqcuam7bmye2pb54adnrtccjlsu'),
);

testBlock.data = new Buffer(''); // $ExpectError
testBlock.cid = new CID(''); // $ExpectError

testBlock.data; // $ExpectType Buffer
testBlock.cid; // $ExpectType CID
