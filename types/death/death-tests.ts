import ON_DEATH = require("death");

const unsub: () => void = ON_DEATH(
    (value: "SIGINT" | "SIGTERM" | "SIGQUIT") => {}
);

const otherUnsub: () => void = ON_DEATH({
    debug: true,
    uncaughtException: true,
    SIGINT: true,
    SIGTERM: true,
    SIGQUIT: true,
    SIGHUP: true
})(
    (
        value: "uncaughtException" | "SIGINT" | "SIGTERM" | "SIGQUIT" | "SIGHUP"
    ) => {}
);
