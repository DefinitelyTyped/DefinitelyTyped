import { Writable } from "stream";
import { SendOptions } from "../Client";

import Client = require("../Client");

declare class Transaction {
    constructor(id: number, client: Client);

    send(headers?: any, options?: SendOptions): Writable;

    commit(options?: SendOptions): void;
    abort(options?: SendOptions): void;
}

export = Transaction;
