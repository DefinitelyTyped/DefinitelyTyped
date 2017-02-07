
import traverse = require('traverse');

function testForEach(){
    var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 } ];

    traverse(obj).forEach(function (x) {
        if (x < 0) this.update(x + 128);
    });

    console.dir(obj);
}

function testReduce(){
    var obj = {
        a : [1,2,3],
        b : 4,
        c : [5,6],
        d : { e : [7,8], f : 9 },
    };

    var leaves = traverse(obj).reduce(function (acc, x) {
        if (this.isLeaf) acc.push(x);
        return acc;
    }, []);

    console.dir(leaves);
}

function testMap(){
    var c: any[] = [3, 4];
    var obj = { a : 1, b : 2, c : c };
    obj.c.push(obj);

    var scrubbed = traverse(obj).map(function (x) {
        if (this.circular) this.remove()
    });
    console.dir(scrubbed);
}
