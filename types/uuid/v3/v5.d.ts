import { v5 } from "./interfaces";

interface v5Static {
    // https://github.com/kelektiv/node-uuid/blob/master/v5.js#L47
    DNS: string;
    // https://github.com/kelektiv/node-uuid/blob/master/v5.js#L48
    URL: string;
}

declare const v5: v5Static & v5;

export = v5;
