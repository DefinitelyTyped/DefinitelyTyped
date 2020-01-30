// Typescript Version: 2.3
import { configureToMatchImageSnapshot, MatchImageSnapshotOptions, toMatchImageSnapshot } from 'jest-image-snapshot';

it('should be able to use toMatchImageSnapshot in a test', () => {
    expect.extend({ toMatchImageSnapshot });

    expect(400).toMatchImageSnapshot();
});

it('should be able to use configureToMatchImageSnapshot in a test', () => {
    const matchFn = configureToMatchImageSnapshot({
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false
        },
        failureThreshold: 10,
        failureThresholdType: 'percent'
    });
    expect.extend({ toMatchImageSnapshot: matchFn });

    expect('Me').toMatchImageSnapshot();
});

it('Should be able to use configuration directly in toMatchImageSnapshot', () => {
    expect.extend({ toMatchImageSnapshot });

    const options: MatchImageSnapshotOptions = {
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false
        },
        customDiffDir: './diffs',
        diffDirection: 'vertical',
        updatePassedSnapshot: true,
        failureThreshold: 10,
        failureThresholdType: 'percent'
    };

    expect('Me').toMatchImageSnapshot(options);
});

it('Should be able to use string as customSnapshotIdentifier', () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: 'string identifier',
    };

    expect('Me').toMatchImageSnapshot(options);
});

it('Should be able to use callback as customSnapshotIdentifier', () => {
    const options: MatchImageSnapshotOptions = {
        customSnapshotIdentifier: () => 'string identifier',
    };

    expect('Me').toMatchImageSnapshot(options);
});
