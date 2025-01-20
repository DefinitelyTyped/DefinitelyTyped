import { v1, v4 } from "./interfaces";

interface UuidStatic {
    v1: v1;
    v4: v4;
}

declare const uuid_browser: UuidStatic & v4;
export = uuid_browser;
