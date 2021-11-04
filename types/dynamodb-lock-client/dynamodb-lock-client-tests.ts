import * as AWS from "aws-sdk";
import * as DynamoDBLockClient from "dynamodb-lock-client";

const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: "us-east-1",
});

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
    heartbeatPeriodMs: 3e3,
    leaseDurationMs: 1e4,
});

failOpenClient.acquireLock("my-fail-open-lock", (error, lock) => {
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
