// For node.js compile using: tsc --module commonjs easystarjs-tests.ts
// then run using: node easystarjs-tests.js
import EasyStar = require('easystarjs');

var test = new EasyStar.js();

test.setGrid([
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0]
]);
test.setAcceptableTiles([0]);
test.setIterationsPerCalculation(1000);
test.findPath(2, 0, 4, 4, function (path: EasyStar.Position[])
{
    if (path == null)
    {
        console.log("No path found!");
        return;
    }
    for (var i = 0; i < path.length; i++)
    {
        var pos = path[i];
        console.log("%d, %d", pos.x, pos.y);
    }
});

test.calculate();

/*
Should log:

2, 0
2, 1
1, 1
1, 2
1, 3
2, 3
3, 3
4, 3
4, 4

*/