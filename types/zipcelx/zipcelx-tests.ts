import zipcelx, { ZipCelXConfig } from "zipcelx";

const config: ZipCelXConfig = {
    filename: "general-ledger-Q1",
    sheet: {
        data: [
            [{
                value: "Income - Webshop",
                type: "string"
            }, {
                value: 1000,
                type: "number"
            }]
        ]
    }
};

zipcelx(config);
