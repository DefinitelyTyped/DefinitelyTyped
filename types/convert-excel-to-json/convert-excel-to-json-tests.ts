import excelToJson = require("convert-excel-to-json");
import { readFileSync } from "fs";

const sourceFile = "test-data.xlsx";
const sourceBuffer = readFileSync(sourceFile);

// @ts-expect-error
excelToJson({
    header: {
        rows: 1
    }
});

// $ExpectType any
excelToJson({
    sourceFile
}).sheet1[2];

// $ExpectType any[]
excelToJson(`{"sourceFile": "${sourceFile}"}`).sheet1;

// $ExpectType any
excelToJson({
    source: sourceBuffer
}).sheet1[0];

// $ExpectType any[]
excelToJson({
    sourceFile,
    range: "A2:B3",
    sheets: ["sheet1", {
        name: "sheet2",
        header: {
            rows: 1
        },
        columnToKey: {
            A: "id",
            B: "firstName",
            D: "email"
        }
    }]
}).sheet2;

// $ExpectType { [key: string]: any[]; }
excelToJson({
    sourceFile,
    sheets: [{
        name: "sheet2",
    }],
    header: {
        rows: 1
    },
    columnToKey: {
        A: "{{A1}}",
        B: "{{B1}}",
        D: "{{D1}}"
    }
});

// $ExpectType any[]
excelToJson({
    sourceFile,
    sheets: [{
        name: "sheet3",
    }],
    header: {
        rows: 0
    },
    includeEmptyLines: false,
    sheetStubs: true
}).sheet3;
