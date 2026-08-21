import { isErrnoException } from "is-errno-exception";

try {
    new URL("unknown");
} catch (e) {
    if (isErrnoException(e) && e.code === "ERR_MODULE_NOT_FOUND") {
        console.warn(e.code.toLocaleUpperCase());
    }
}
