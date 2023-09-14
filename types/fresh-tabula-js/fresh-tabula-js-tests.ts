import Tablua = require("fresh-tabula-js");
import Highland = require("highland");

let tabula = new Tablua("path.pdf");
tabula = new Tablua("path.pdf", {});
tabula = new Tablua("path.pdf", {
    area: "269.875,12.75,790.5,561",
    columns: "10.1,20.2,30.3",
    debug: false,
    guess: true,
    silent: false,
    noSpreadsheet: false,
    pages: "1",
    spreadsheet: true,
    password: "",
    useLineReturns: false,
});

const data: Promise<{ output: string; error: string }> = tabula.getData();

tabula.streamSections((err: Error | null, data: string | null) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

const highlandStream: Highland.Stream<any> = tabula.stream();
