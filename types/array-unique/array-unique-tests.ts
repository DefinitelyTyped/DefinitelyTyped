import arrayUnique = require("array-unique");

arrayUnique([1, 1, 2, 3, 3]);

arrayUnique(["foo", "foo", "bar", "foo"]);

arrayUnique.immutable([1, 1, 2, 3, 3]);

arrayUnique.immutable(["foo", "foo", "bar", "foo"]);
