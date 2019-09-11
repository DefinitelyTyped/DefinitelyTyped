import { Readable as ReadableStream } from 'stream';
import ipfsFactory, * as ipfsNS from 'ipfs-http-client';

const ipfs = ipfsFactory({});

let addResult = ipfs.add(Buffer.from('foo'));

// Add multiple files with descriptors
addResult = ipfs.add([{ path: '/tmp/foo', content: Buffer.from('foo') }]);

// Add readable stream
let addReadableStreamResult: ReadableStream;
addReadableStreamResult = ipfs.addReadableStream();

// Add from URL
let addFromUrlResult = ipfs.addFromURL('fooo');

// Get
let getResult = ipfs.get('foo');
getResult.then(res => {
    const { content, path } = res;
});

// List to readable stream
let lsRSResult = ipfs.lsReadableStream('./');

// Mutable file system
let cpResult = ipfs.files.cp('./foo', './bar', {});
cpResult.then(x => x);

// Dag
let dagGetResult = ipfs.dag.get('foo');
dagGetResult.then(result => result.value + ':' + result.remainderPath);

// Object
let newObjectResult = ipfs.object.new();
newObjectResult.then(result => result.codec);

ipfs.object.patch.rmLink('foo', { name: 'bar' });

ipfs.dag.get('foo');
