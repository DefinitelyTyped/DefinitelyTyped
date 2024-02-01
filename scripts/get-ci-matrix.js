const testCount = Number.parseInt(process.argv[2]);

const testsPerJob = 250;
const maxJobs = 8;

// Attempt to spawn as many jobs as needed to have only 250 tests per job,
// up to 8 concurrent jobs.
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
