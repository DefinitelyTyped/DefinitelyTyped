import Commerce = require("../");
import { Merchant } from "../types/merchant";

export class Merchants {
    constructor(commerce: Commerce);

    about(): Promise<Merchant>;
}
