import {
    configureToMatchImageSnapshot,
    MatchImageSnapshotOptions,
    toMatchImageSnapshot,
    updateSnapshotState,
} from 'jest-image-snapshot';

it('should be able to use toMatchImageSnapshot in a test', () => {
    expect.extend({ toMatchImageSnapshot });

    expect(400).toMatchImageSnapshot();
});

it('should be able to use configureToMatchImageSnapshot in a test', () => {
    const matchFn = configureToMatchImageSnapshot({
        allowSizeMismatch: true,
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false,
        },
        onlyDiff: false,
        failureThreshold: 10,
        failureThresholdType: 'percent',
    });
    expect.extend({ toMatchImageSnapshot: matchFn });

    expect('Me').toMatchImageSnapshot();
});

it('Should be able to use configuration directly in toMatchImageSnapshot', () => {
    expect.extend({ toMatchImageSnapshot });

    const options: MatchImageSnapshotOptions = {
        allowSizeMismatch: false,
        noColors: true,
        customDiffConfig: {
            threshold: 5,
            includeAA: false,
        },
        customDiffDir: './diffs',
        storeReceivedOnFailure: true,
        customReceivedDir: '/usr/local/__received_output__',
        diffDirection: 'vertical',
        onlyDiff: false,
        dumpInlineDiffToConsole: true,
        updatePassedSnapshot: true,
        failureThreshold: 10,
        failureThresholdType: 'percent',
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

it('mutates original state', () => {
    const originalState = { some: 'value' };
    updateSnapshotState(originalState, { another: 'val' });
    expect(originalState).toEqual({ some: 'value', another: 'val' });
});

it('Should be able to override toMatchImageSnapshot', () => {
    const img = Buffer.from('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII', 'base64');
    
    function toMatchImageSnapshotOverrided(this: unknown, received: Buffer) {
        const screenshotMatchingResult = toMatchImageSnapshot.call(
            this,
            received,
            {customDiffDir: './diffs'},
          );
        console.log(screenshotMatchingResult.message());
        return screenshotMatchingResult;
    }
    expect.extend({ toMatchImageSnapshot: toMatchImageSnapshotOverrided });

    expect(img).toMatchImageSnapshot();
});
