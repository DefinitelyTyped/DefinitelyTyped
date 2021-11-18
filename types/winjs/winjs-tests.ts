declare const foo: WinJS.Utilities.QueryCollection<number>;

foo.forEach((_value, _index, array) => {
    array.addClass("");
});
