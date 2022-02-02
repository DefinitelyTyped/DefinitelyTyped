import type { Config } from 'karma';

it('should compare image snapshots', async () => {
    const image = await window.screenshot();
    await expectAsync(image).toMatchImageSnapshot();
});

module.exports = (config: Config) => {
    config.set({
        reporters: ['outdated-snapshot'],
        snapshot: {
            allowSizeMismatch: true,
            blur: 2,
            comparisonMethod: 'pixelmatch',
        },
    });
};
