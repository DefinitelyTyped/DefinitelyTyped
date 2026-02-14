import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
    toMatchImageSnapshot,
    updateSnapshotState,
} from "jest-image-snapshot";
import sharp from "sharp";

it("should be able to use toMatchImageSnapshot in a test", async () => {
    expect.extend({ toMatchImageSnapshot });

    expect(
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    ).toMatchImageSnapshot();
});

it("should be able to use configureToMatchImageSnapshot in a test", async () => {
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

    expect(
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    ).toMatchImageSnapshot();
});

it("Should be able to use configuration directly in toMatchImageSnapshot", async () => {
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

    expect(
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    ).toMatchImageSnapshot(options);
});

it("Should be able to use string as customSnapshotIdentifier", async () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: "string identifier",
    };

    expect(
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    ).toMatchImageSnapshot(options);
});

it("Should be able to use callback as customSnapshotIdentifier", async () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: () => "string identifier",
    };

    expect(
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    ).toMatchImageSnapshot(options);
});

it("mutates original state", () => {
    const originalState = { some: "value" };
    updateSnapshotState(originalState, { another: "val" });
    expect(originalState).toEqual({ some: "value", another: "val" });
});

it("should be able to use toMatchImageSnapshot without expect", async () => {
    const result = toMatchImageSnapshot.call(
        expect.getState(),
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
        {
            allowSizeMismatch: true,
        },
    );
    expect(result.pass).toEqual(true);
});

it("should be able to use configureToMatchImageSnapshot without expect", async () => {
    const matchFn = configureToMatchImageSnapshot({
        allowSizeMismatch: true,
    });

    const result = matchFn.call(
        expect.getState(),
        await sharp({
            create: {
                background: { b: 0, g: 255, r: 0 },
                channels: 3,
                height: 48,
                width: 48,
            },
        }).png().toBuffer(),
    );
    expect(result.pass).toEqual(true);
});
