import humanize = require('tiny-human-time');

// Test Dates
{
    const now = new Date(2016, 3, 5);
    const later = new Date(2016, 3, 6);

    humanize(now);
    humanize(now, later);
    humanize(now, later, 'long');
    humanize(now, later, 'short');
    // @ts-expect-error
    humanize(now, later, 'garbage');
}

// Test numbers
{
    const now = 0;
    const later = 1;

    humanize(now);
    humanize(now, later);
    humanize(now, later, 'long');
    humanize(now, later, 'short');
    // @ts-expect-error
    humanize(now, later, 'garbage');
}

// Test tuples
{
    const start: [number, number] = [1843869, 590588751];
    const elapsed: [number, number] = [23, 698942984];

    humanize(start);
    humanize(start, elapsed);
    humanize(start, elapsed, 'long');
    humanize(start, elapsed, 'short');
    // @ts-expect-error
    humanize(start, elapsed, 'garbage');
}

// Test short function
{
    humanize.short(new Date(2016, 3, 5));
    humanize.short(new Date(2016, 3, 5), new Date(2016, 3, 6));
    humanize.short(0);
    humanize.short(0, 1);
    humanize.short([1843869, 590588751] as [number, number]);
    humanize.short([1843869, 590588751] as [number, number], [23, 698942984] as [number, number]);
}
