namespace adoneTests.pretty.json {
    const {
        json
    } = adone.pretty;

    let str: string;

    str = json({});
    str = json({}, {});
    str = json({}, {}, 1);
    str = json({}, { dashColor: "green" });
    str = json({}, { defaultIndentation: 10 });
    str = json({}, { emptyArrayMsg: "asdas" });
    str = json({}, { keysColor: "green" });
    str = json({}, { noAlign: true });
    str = json({}, { noColor: true });
    str = json({}, { numberColor: "green" });
    str = json({}, { stringColor: "green" });
}
