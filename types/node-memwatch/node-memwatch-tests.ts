import memwatch = require("node-memwatch");

memwatch.on("stats", info => {
    info.estimated_base;
});

memwatch.on("leak", info => {
    info.growth;
});

const hd = new memwatch.HeapDiff(); // $ExpectType HeapDiff
const diff = hd.end();
diff.change.allocated_nodes;
diff.change.details[0].what;
