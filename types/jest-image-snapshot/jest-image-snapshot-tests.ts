import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
    toMatchImageSnapshot,
    updateSnapshotState,
} from "jest-image-snapshot";

it("should be able to use toMatchImageSnapshot in a test", () => {
    expect.extend({ toMatchImageSnapshot });

    expect(400).toMatchImageSnapshot();
});

it("should be able to use configureToMatchImageSnapshot in a test", () => {
    const matchFn = configureToMatchImageSnapshot({
        allowSizeMismatch: true,
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false,
        },
        onlyDiff: false,
        failureThreshold: 10,
        failureThresholdType: "percent",
    });
    expect.extend({ toMatchImageSnapshot: matchFn });

    expect("Me").toMatchImageSnapshot();
});

it("Should be able to use configuration directly in toMatchImageSnapshot", () => {
    expect.extend({ toMatchImageSnapshot });

    const options: MatchImageSnapshotOptions = {
        allowSizeMismatch: false,
        maxChildProcessBufferSizeInBytes: 100 * 1024 * 1024,
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false,
        },
        customDiffDir: "./diffs",
        storeReceivedOnFailure: true,
        customReceivedDir: "/usr/local/__received_output__",
        customReceivedPostfix: "-new",
        diffDirection: "vertical",
        onlyDiff: false,
        runtimeHooksPath: require.resolve("./stubs/runtimeHooksPath.js"),
        dumpInlineDiffToConsole: true,
        updatePassedSnapshot: true,
        failureThreshold: 10,
        failureThresholdType: "percent",
    };

    expect("Me").toMatchImageSnapshot(options);
});

it("Should be able to use string as customSnapshotIdentifier", () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: "string identifier",
    };

    expect("Me").toMatchImageSnapshot(options);
});

it("Should be able to use callback as customSnapshotIdentifier", () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: () => "string identifier",
    };

    expect("Me").toMatchImageSnapshot(options);
});

it("mutates original state", () => {
    const originalState = { some: "value" };
    updateSnapshotState(originalState, { another: "val" });
    expect(originalState).toEqual({ some: "value", another: "val" });
});
