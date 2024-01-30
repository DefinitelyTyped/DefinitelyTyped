const testCount = Number.parseInt(process.argv[2]);

let shardCount = Math.ceil(testCount / 500);

shardCount = Math.min(shardCount, 4);
shardCount = Math.max(shardCount, 1);

const include = [];

for (let i = 0; i < shardCount; i++) {
    include.push({
        shardId: i + 1,
        shardCount,
    });
}

console.log(JSON.stringify({ include }));
