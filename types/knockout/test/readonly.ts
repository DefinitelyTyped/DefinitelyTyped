function testReadonlyObservable() {
    const write = ko.observable("foo");
    write("bar");
    const read = write as KnockoutReadonlyObservable<string>;

    read(); // $ExpectType string
    read.subscribe(() => {});  // Can still subscribe
    // But can't write to it
    read("foo"); // $ExpectError

    const writeAgain = read as KnockoutObservable<string>
    writeAgain("bar");
};
