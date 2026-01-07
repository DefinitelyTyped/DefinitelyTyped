import { pitch, warmup } from "thread-loader";

// $ExpectType void
pitch();

// $ExpectType void
warmup({}, ["babel-loader", "babel-preset-env"]);

// $ExpectType void
warmup(
    {
        name: "name",
        numberOfWorkers: 1,
        workerNodeArgs: ["--max-old-space-size=1024", "", null],
        workerParallelJobs: 20,
        poolTimeout: 500,
        poolParallelJobs: 200,
        poolRespawn: true,
    },
    ["babel-loader", "babel-preset-env"],
);
