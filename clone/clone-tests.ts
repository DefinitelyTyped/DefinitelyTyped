import clone = require("clone");

var original = {
    key: "value"
};

var copy = clone(original);
copy = clone(original, false);
copy = clone(original, true, 1);
copy = clone.clonePrototype(original);
