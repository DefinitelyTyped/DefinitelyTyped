import magnetURIDecode, { decode, encode, type Instance } from "magnet-uri";

// "Leaves of Grass" by Walt Whitman
const uri =
    "magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36&dn=Leaves+of+Grass+by+Walt+Whitman.epub&tr=udp%3A%2F%2Ftracker.example4.com%3A80&tr=udp%3A%2F%2Ftracker.example5.com%3A80&tr=udp%3A%2F%2Ftracker.example3.com%3A6969&tr=udp%3A%2F%2Ftracker.example2.com%3A80&tr=udp%3A%2F%2Ftracker.example1.com%3A1337";

// default export
const parsed1 = magnetURIDecode(uri);
// $ExpectType string | undefined
parsed1.infoHash;
// $ExpectType string[] | undefined
parsed1.announce;
// $ExpectType string | undefined
parsed1.name;

// decode alias
const parsed2 = decode(uri);
// $ExpectType string | undefined
parsed2.infoHash;

// encode
const magnetUri = encode(parsed1);
// $ExpectType string
magnetUri;
