// Typescript Version: 2.3
import { toMatchImageSnapshot, configureToMatchImageSnapshot } from 'jest-image-snapshot';

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
