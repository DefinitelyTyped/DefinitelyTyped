import each = require("stream-each");
import { createReadStream } from "fs";

const stream = createReadStream(__filename);

each(stream,
    (data, next) => {
        if (typeof data === "string") {
            console.log(data);
            next();
        } else {
            const buffer: Buffer = data;
            next(new Error("Buffer"));
        }
    },
    error => console.error(error));
