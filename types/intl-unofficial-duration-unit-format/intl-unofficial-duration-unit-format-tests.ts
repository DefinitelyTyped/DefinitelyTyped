import DurationUnitFormat from 'intl-unofficial-duration-unit-format';

new DurationUnitFormat().format(10);

new DurationUnitFormat('en').format(10);

new DurationUnitFormat(['en-GB', 'en-US']).format(10);

// @ts-expect-error
new DurationUnitFormat('en').format(undefined);

new DurationUnitFormat('en', {
    style: 'custom',
});

new DurationUnitFormat('en', {
    style: DurationUnitFormat.styles.CUSTOM,
});

new DurationUnitFormat('en', {
    // @ts-expect-error
    style: 'wrong',
});

new DurationUnitFormat('en', {
    formatUnits: {
        day: '{value}',
        hour: '{value}',
        minute: '{value}',
        second: '{value}',
    },
});

new DurationUnitFormat('en', {
    formatUnits: {
        // @ts-expect-error
        wrong: '{value}',
    },
});

new DurationUnitFormat('en', {
    // @ts-expect-error
    formatUnits: {},
});

new DurationUnitFormat('en', {
    formatUnits: {
        [DurationUnitFormat.units.DAY]: '{value}',
        [DurationUnitFormat.units.HOUR]: '{value}',
        [DurationUnitFormat.units.MINUTE]: '{value}',
        [DurationUnitFormat.units.SECOND]: '{value}',
    },
});

new DurationUnitFormat().formatToParts(10);
