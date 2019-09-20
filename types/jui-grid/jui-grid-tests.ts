/// <reference types="jquery" />

import { jui } from 'jui-core';
import { GridTable, GridXTable, GridRow } from "jui-grid";

jui.ready([ "grid.table" ], (table: GridTable) => {
    const table_1: GridTable = table("#table_1", {
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "15", location: "Yeosu" },
            { name: "Kang", age: "32", location: "Seoul" },
            { name: "Song", age: "12", location: "Gwangju" },
            { name: "Yoon", age: "22", location: "Damyang" },
            { name: "Kim", age: "33", location: "Busan" },
            { name: "Hwang", age: "21", location: "Seoul" }
        ]
    });

    table_1.scroll(100);
});

jui.ready([ "grid.table" ], (table: GridTable) => {
    const table_3: GridTable = table("#table_3", {
        event: {
            expand(row: any, e: any): void {
                $(row.list[0]).html("<i class='icon-right'></i>");
            },
            expandend(row: any, e: any): void {
                $(row.list[0]).html("<i class='icon-left'></i>");
            }
        },
        expand: true
    });

    table_3.update([
        { name: "Hong", age: "20", location: "Ilsan" },
        { name: "Jung", age: "30", location: "Seoul" },
        { name: "Park", age: "10", location: "Dangjin" }
    ]);

    const table_3_submit: Function = (index: number) => {
        const name = $(table_3.root).find(".name").val();
        const age = $(table_3.root).find(".age").val();
        const location = $(table_3.root).find(".location").val();

        //noinspection TypeScriptValidateTypes
        table_3.update(index, { name, age, location });
        table_3.hideExpand();
    };
});

jui.ready([ "grid.xtable" ], (xtable: GridXTable) => {
    let page = 1;

    const xtable_2: GridXTable = xtable("#xtable_2", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        buffer: "page",
        bufferCount: 20
    });

    const xtable_2_submit: Function = () => {
        const result: any[] = [];

        for (let i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        page = 1;
        xtable_2.update(result);
        xtable_2.resize();
    };

    const xtable_2_page: Function  = (no: number) => {
        page += no;
        page = (page < 1) ? 1 : page;
        xtable_2.page(page);
    };
});

jui.ready([ "grid.xtable" ], (xtable: GridXTable) => {
    const xtable_4: GridXTable  = xtable("#xtable_4", {
        fields: [ "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "10", location: "Dangjin" }
        ],
        resize: true,
        sort: true,
        buffer: "s-page",
        bufferCount: 20
    });

    const xtable_4_submit: Function = (isMulti: boolean) => {
        if (isMulti) {
            xtable_4.filter((data: any) => {
                if (data.age >= 30 || data.name.indexOf("ng") !== -1) {
                    return true;
                }
            });
        } else {
            xtable_4.filter((data: any) => {
                if (data.location.indexOf("eo") !== -1) {
                    return true;
                }
            });
        }
    };
});

jui.ready([ "grid.xtable" ], (xtable: GridXTable) => {
    const xtable_6: GridXTable = xtable("#xtable_6", {
        fields: [ "name", "age", "location" ],
        resize: true,
        sort: true,
        width: 800,
        scrollWidth: 600,
        scrollHeight: 400,
        rowHeight: 26,
        buffer: "vscroll",
        tpl: {
            row: "<tr><td><!= name !></td><td><!= age !></td><td><!= location !></td></tr>",
            none: "<tr><td colspan='3' class='none' align='center'>Data does not exist.</td></tr>"
        }
    });

    const xtable_6_submit: Function = () => {
        const result: any[] = [];

        for (let i = 0; i < 1000000; i++) {
            result.push({ name: "Alvin" + i, age: Math.floor(Math.random() * 100) + 1, location: "LA" });
        }

        xtable_6.update(result);
    };
});

jui.ready([ "grid.xtable" ], (xtable: GridXTable) => {
    const xtable_8: GridXTable = xtable("#xtable_8", {
        fields: [ "url", "count" ],
        resize: true,
        buffer: "vscroll",
        rowHeight: 27,
        scrollHeight: 300,
        tpl: {
            row: $("#tpl_row").html(),
            none: $("#tpl_none").html()
        },
        event: {
            select(row: GridRow, e: any) {
                if (row.type === "fold") {
                    xtable_8.open(row.index);
                } else {
                    xtable_8.fold(row.index);
                }
            }
        }
    });

    xtable_8.updateTree([
        { index: "0", type: "open", data: { url: "/", count: 105 } },
        { index: "0.0", type: "fold", data: { url: "/css", count: 35 } },
        { index: "0.0.0", type: "fold", data: { url: "/index.css", count: 15 } },
        { index: "0.0.1", type: "fold", data: { url: "/layout.css", count: 15 } },
        { index: "0.0.2", type: "fold", data: { url: "/login.css", count: 5 } },
        { index: "0.1", type: "fold", data: { url: "/js", count: 35 } },
        { index: "0.1.0", type: "fold", data: { url: "/index.js", count: 23 } },
        { index: "0.1.1", type: "fold", data: { url: "/jquery.js", count: 12 } },
        { index: "0.2", type: "fold", data: { url: "/img", count: 0 } },
        { index: "0.2.0", type: "fold", data: { url: "logo.ico", count: 0 } },
        { index: "0.3", type: "fold", data: { url: "/main.jsp", count: 10 } },
        { index: "0.4", type: "fold", data: { url: "/login.jsp", count: 10 } },
        { index: "0.5", type: "fold", data: { url: "/sitemap.xml", count: 10 } },
        { index: "0.6", type: "fold", data: { url: "/package.json", count: 5 } }
    ]);
});
