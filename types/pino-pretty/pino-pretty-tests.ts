import prettyFactory = require("pino-pretty");
import { PrettyOptions } from "pino-pretty";

const options: PrettyOptions = {
    colorize: true,
    crlf: false,
    errorLikeObjectKeys: ["err", "error"],
    errorProps: "",
    hideObject: true,
    levelKey: "level",
    levelLabel: "foo",
    messageFormat: false,
    ignore: "",
    levelFirst: false,
    messageKey: "msg",
    timestampKey: "timestamp",
    translateTime: "UTC:h:MM:ss TT Z",
    search: "foo == `bar`",
    singleLine: false,
};

const pretty = prettyFactory(options);

// $ExpectType string
pretty({ foo: "bar" });

// Argument of type 'number' is not assignable to parameter of type 'string | object'.
// prettier-ignore
pretty(12345); // $ExpectError

// Argument of type 'boolean' is not assignable to parameter of type 'string | object'.
// prettier-ignore
pretty(false); // $ExpectError
