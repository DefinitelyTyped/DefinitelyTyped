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


function testReadonlyObservableArray() {
    // Normal observable array behavior
    const write = ko.observableArray(["foo"]);
    write(["bar"]);
    write.push("foo");

    // Readonly observable array
    const read = write as KnockoutReadonlyObservableArray<string>;
    read(); //$ExpectType ReadonlyArray<string>
    read.slice(0, 1); //$ExpectType string[]
    read(["foo"]); // $ExpectError
    read.push; // $ExpectError

    // Can cast back to a writeable
    const writeAgain = read as KnockoutObservableArray<string>
    writeAgain(["foo"]);
}

function testReadonlyComputed() {
    const write = ko.computed({
        read: () => {},
        write: () => {},
    });

    // Can cast a computed as readonly
    const read: KnockoutReadonlyComputed<any> = write;
    read();
    read("foo"); // $ExpectError
}
