/// <reference path="hasher.d.ts" />
hasher.init();
hasher.setHash("foo");

hasher.changed.add(function (newHash: string, oldHash: string) {
    console.log("hash changed from " + oldHash + " to " + newHash);
});

hasher.setHash("foo", "bar");

hasher.getBaseURL(); // ''
console.log(hasher.separator); // /
hasher.getHash(); //foo/bar
hasher.getHashAsArray(); // ['foo', 'bar']
hasher.getURL();// #foo/bar

hasher.stop();