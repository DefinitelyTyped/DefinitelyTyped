const testCount = Number.parseInt(process.argv[2]);

const testsPerJob = 250;
const maxJobs = 8;

let shardCount = Math.ceil(testCount / testsPerJob);
shardCount = Math.min(shardCount, maxJobs);
shardCount = Math.max(shardCount, 1);

const include = [];

for (let i = 0; i < shardCount; i++) {
    include.push({
        shardId: i + 1,
        shardCount,
    });
}

console.log(JSON.stringify({ include }));
