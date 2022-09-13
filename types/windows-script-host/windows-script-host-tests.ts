const collectionToArray = <T>(col: { Item(key: any): T }): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

// Show all of the arguments.
WScript.Echo(`${WScript.Arguments.Length} arguments`);

for (const arg of collectionToArray(WScript.Arguments)) {
    WScript.Echo(`    ${arg}`);
}

// Show the unnamed arguments.
WScript.Echo(`${WScript.Arguments.Unnamed.Length} unnamed arguments`);

for (const unnamed of collectionToArray(WScript.Arguments.Unnamed)) {
    WScript.Echo(`    ${unnamed}`);
}

// Show the named arguments.
WScript.Echo(`${WScript.Arguments.Named.Length} named arguments`);
for (const key of collectionToArray(WScript.Arguments.Named)) {
    WScript.Echo(`    ${key}=${WScript.Arguments.Named(key)}`);
}
