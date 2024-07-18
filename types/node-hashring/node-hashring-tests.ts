import HashRing = require("node-hashring");

// test type exports
type HR = HashRing;
type HRCtor = typeof HashRing;

const hashRing = new HashRing(["server-address-1", "server-address-2"]);
new HashRing(["server-address-1", "server-address-2"], 10);

hashRing.nodes; // $ExpectType readonly string[]
hashRing.nodeMap; // $ExpectType { readonly [key: string]: number; }
hashRing.virtualNodes; // $ExpectType number
hashRing.nodeSize; // $ExpectType number
hashRing.vnodeToNodeMap; // $ExpectType { readonly [key: string]: string; }
hashRing.ring; // $ExpectType readonly string[]
hashRing.assigned; // $ExpectType { readonly [key: string]: number | undefined; }

hashRing.getHashValue("foo"); // $ExpectType number
hashRing.search("foo"); // $ExpectType number
hashRing.addNode("foo"); // $ExpectType void
hashRing.removeNode("foo"); // $ExpectType void
hashRing.findNode("foo"); // $ExpectType string | undefined
