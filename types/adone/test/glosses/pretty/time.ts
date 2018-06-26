namespace adoneTests.pretty.time {
    const {
        time
    } = adone.pretty;

    let str: string;

    str = time(12345);
    str = time(12345, {});
    str = time(12345, { compact: true });
    str = time(12345, { msDecimalDigits: 2 });
    str = time(12345, { secDecimalDigits: 2 });
    str = time(12345, { verbose: true });
}
