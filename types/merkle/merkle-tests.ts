import merkle = require("merkle");

const stream = merkle('sha256');
const merkleTree = stream.sync([1, 2, 3, 4, 5, 6, 7, 8]);
merkleTree.root();
