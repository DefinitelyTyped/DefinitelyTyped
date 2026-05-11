import * as DynamoDBLockClient from "dynamodb-lock-client";

const dynamodb = {
    get: () => {},
    put: () => {},
    delete: () => {},
};

const failClosedClient = new DynamoDBLockClient.FailClosed({
    dynamodb,
    lockTable: "my-lock-table-name",
    partitionKey: "mylocks",
    acquirePeriodMs: 1e4,
});

failClosedClient.acquireLock("my-fail-closed-lock", (error, lock) => {
    if (error) {
        console.error(error);
        return;
    }

    lock.release(error => {
        if (error) {
            console.error(error);
        } else {
            console.log("released fail closed lock");
        }
    });
    return;
});

const failOpenClient = new DynamoDBLockClient.FailOpen({
    dynamodb,
    lockTable: "my-lock-table-name",
    partitionKey: "mylocks",
    sortKey: "mysortkey",
    heartbeatPeriodMs: 3e3,
    leaseDurationMs: 1e4,
    retryCount: 0,
});

failOpenClient.acquireLock({ mylocks: "my-fail-open-lock", mysortkey: "my-sort-key" }, (error, lock) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`acquired fail open lock with fencing token ${lock.fencingToken}`);
    lock.on("error", error => console.error("failed to heartbeat!"));

    lock.release(error => {
        if (error) {
            console.error(error);
        } else {
            console.log("released fail open lock");
        }
    });
    return;
});
