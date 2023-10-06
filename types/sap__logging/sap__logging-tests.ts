import * as logging from "@sap/logging";
import * as express from "express";
import * as http from "http";
import { Socket } from "net";

// code examples from the README.MD

/// Example - start ///
const app = express();

const appContext = logging.createAppContext();

app.use(logging.middleware({ appContext, logNetwork: true }));

interface RequestWithLogging extends express.Request {
    loggingContext: logging.LogContext;
}

app.get("/demo", (req, res) => {
    const reql = req as RequestWithLogging;
    const logger = reql.loggingContext.getLogger("/Application/Network");
    const tracer = reql.loggingContext.getTracer(__filename);

    logger.info("Retrieving demo greeting ...");
    tracer.info("Processing GET request to /demo");

    res.send("Hello World!");
});

app.listen(3000, () => console.log("Server started"));
/// Example - end ///

function testAppContext() {
    // create
    const appContext1: logging.AppContext = logging.createAppContext();
    const appContext2: logging.AppContext = logging.createAppContext({
        csnComponent: "component id",
    });

    // set severity levels
    appContext1.setLevel("/Application/*", "warning"); // for a logger
    appContext2.setLevel("/Application/index.js", "debug"); // for a tracer

    // unset severity levels
    appContext1.unsetLevel("/Application/*"); // for a logger
    appContext2.unsetLevel("/Application/index.js"); // for a tracer

    // set custom fields
    appContext1.setCustomFields(["custom1", "custom2"]);
}

function testLogContext() {
    // create
    const appContext: logging.AppContext = logging.createAppContext();
    const logContext1: logging.LogContext = appContext.createLogContext();
    const logContext2: logging.LogContext = appContext.createLogContext({
        id: "unique-id",
    });
    const logContext3: logging.LogContext = appContext.createLogContext({
        correlationId: "correlation-id",
    });
    const logContext4: logging.LogContext = appContext.createLogContext({
        req: new http.IncomingMessage(new Socket()),
    });

    const appContextRet: logging.AppContext = logContext1.getAppContext();
    const id1: string = logContext1.id;
    const correlationid1: string = logContext1.correlationId;

    http.createServer((req, res) => {
        const reqContext = appContext.createLogContext({ req });
        reqContext.enableNetworkLog(res);
        res.end("Hello World");
    });
}

function testLogger() {
    // create
    const logContext: logging.LogContext = logging.createAppContext().createLogContext();
    const logger1: logging.Logger = logContext.getLogger("/Application/Network");
    // @ts-expect-error without file path
    const logger2: logging.Logger = logContext.getLogger();

    const level: logging.LogLevels = logger1.getLevel();
    const willItBeLogged: boolean = logger1.isEnabled("error");

    logger1.info("Successful login of user %s - ", { name: "user", id: 1 }, new Date());
    logger1.warning("Job could not finish successfully. An app admin should retrigger it.");
    logger1.error(new Error("Uups, an error has occurred"));
    logger1.error(new Error("Uups, an error has occurred"), "Error during operation X");
    logger1.fatal("We are in trouble");
}

function testTracer() {
    // create
    const logContext: logging.LogContext = logging.createAppContext().createLogContext();
    const tracer1: logging.Tracer = logContext.getTracer("/Application/Network");
    // @ts-expect-error without file path
    const tracer2: logging.Tracer = logContext.getTracer();

    const level: logging.TraceLevels = tracer1.getLevel();
    const willItBeTraced: boolean = tracer1.isEnabled("path");

    tracer1.debug("Job could not finish successfully. An app admin should retrigger it.");
    tracer1.path("Job could not finish successfully. An app admin should retrigger it.");
    tracer1.info("Successful login of user %s - ", { name: "user", id: 1 }, new Date());
    tracer1.warning("Job could not finish successfully. An app admin should retrigger it.");
    tracer1.error(new Error("Uups, an error has occurred"));
    tracer1.error(new Error("Uups, an error has occurred"), "Error during operation X");
    tracer1.fatal("We are in trouble");

    tracer1.entering("myFunction", "a", 1, { a: "1" });
    tracer1.exiting("myFunction", { result: true });
    tracer1.throwing("func1", new Error());
    tracer1.catching("func1", new Error());
}
