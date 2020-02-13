namespace adoneTests.text.table {
    const {
        text: {
            table
        }
    } = adone;

    let num: number;
    let str: string;

    namespace Table {
        const {
            Table
        } = table;

        new Table();
        new Table({ chars: {} });
        new Table({ chars: { "bottom-left": "a" } });
        new Table({ chars: { "bottom-mid": "a" } });
        new Table({ chars: { "bottom-right": "a" } });
        new Table({ chars: { "left-mid": "a" } });
        new Table({ chars: { "mid-mid": "a" } });
        new Table({ chars: { "right-mid": "a" } });
        new Table({ chars: { "top-left": "a" } });
        new Table({ chars: { "top-mid": "a" } });
        new Table({ chars: { "top-right": "a" } });
        new Table({ chars: { bottom: "a" } });
        new Table({ chars: { left: "a" } });
        new Table({ chars: { mid: "a" } });
        new Table({ chars: { middle: "a" } });
        new Table({ chars: { right: "a" } });
        new Table({ chars: { top: "a" } });
        new Table({ colAligns: ["left"] });
        new Table({ rowAligns: ["top"] });
        new Table({ head: ["a"] });
        new Table({ rowHeights: [10] });
        new Table({ style: { "padding-left": 1 } });
        new Table({ style: { "padding-right": 1 } });
        new Table({ style: { border: ["a"] } });
        new Table({ style: { compact: true } });
        new Table({ style: { head: ["a"] } });
        new Table({ truncate: "a" });
        new Table({ colWidths: [10] });

        num = new Table().width;
        str = new Table().toString();

        const def = Table.defaultOptions;
        str = def.chars["bottom-mid"];
        num = def.style["padding-right"];
    }

    namespace BorderlessTable {
        const {
            BorderlessTable
        } = table;

        new BorderlessTable();
        new BorderlessTable({});
        new BorderlessTable({ colAligns: ["center"] });
        new BorderlessTable({ colWidths: [10] });
        new BorderlessTable({ head: ["a"] });
        new BorderlessTable({ style: { "padding-right": 1 } });
    }
}
