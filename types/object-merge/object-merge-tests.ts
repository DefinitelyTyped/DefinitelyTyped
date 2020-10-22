import objectMerge = require('object-merge');

const x = {
    a : 'a',
    b : 'b',
    c : {
        d : 'd',
        e : 'e',
        f : {
            g : 'g'
        }
    }
};
const y = {
    a : '`a',
    b : '`b',
    c : {
        d : '`d'
    }
};
const z = {
    a : {
        b : '``b'
    },
    fun : function foo() {
        return 'foo';
    },
    aps : Array.prototype.slice
};
const out = objectMerge(x, y, z);

const a = {
    a1 : {
        a2 : {
            a3 : {}
        }
    }
};
const b = {
    b1 : {
        b2 : {
            b3 : {}
        }
    }
};
const opts = objectMerge.createOptions({depth : 2});
const res = objectMerge(opts, a, b);
