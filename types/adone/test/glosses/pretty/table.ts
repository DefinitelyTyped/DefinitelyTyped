namespace adoneTests.pretty.table {
    const {
        table
    } = adone.pretty;

    let str: string;

    str = table([], {
        model: []
    });
    str = table([], {
        borderless: true,
        model: []
    });
    str = table([], {
        countAnsiEscapeCodes: true,
        model: []
    });
    str = table([], {
        noHeader: true,
        model: []
    });
    str = table([], {
        style: {
            "padding-left": 1
        },
        model: []
    });
    str = table([], {
        style: {
            "padding-right": 1
        },
        model: []
    });
    str = table([], {
        style: {
            broder: ["a"]
        },
        model: []
    });
    str = table([], {
        style: {
            compact: true
        },
        model: []
    });
    str = table([], {
        style: {
            head: ["a"]
        },
        model: []
    });
    str = table([], {
        width: 100,
        model: []
    });
    str = table([], {
        width: "100%",
        model: []
    });
    str = table([], {
        model: [{
            id: "ads",
            align: "center"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            format: "%s"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            format(val: any, item: object) {
                return "2";
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            handle(item: object) {
                return "a";
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            header: "he"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            maxWidth: "100%"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            maxWidth: 100
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            style: "asd"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            style(val: any, str: string) {
                return "1";
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            width: 100
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            width: "100%"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: "soft"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: "hard"
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: {
                countAnsiEscapeCodes: true
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: {
                join: true
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: {
                mode: "soft"
            }
        }]
    });
    str = table([], {
        model: [{
            id: "ads",
            wordwrap: {
                mode: "hard"
            }
        }]
    });
}
