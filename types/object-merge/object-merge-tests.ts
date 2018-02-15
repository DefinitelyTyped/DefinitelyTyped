import objectMerge from 'object-merge';

let x = {
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
let y = {
    a : '`a',
    b : '`b',
    c : {
        d : '`d'
    }
};
let z = {
    a : {
        b : '``b'
    },
    fun : function foo () {
        return 'foo';
    },
    aps : Array.prototype.slice
};

let out = objectMerge(x, y, z);



let a = {
    'a1' : {
        'a2' : {
            'a3' : {}
        }
    }
};
let b = {
    'b1' : {
        'b2' : {
            'b3' : {}
        }
    }
};
let opts = objectMerge.createOptions({depth : 2});
let res = objectMerge(opts, a, b);

objectMerge(a, b);