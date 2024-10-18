import {
    error,
    json,
    missing,
    status,
    StatusError,
    text,
    ThrowableRouter,
    withContent,
    withCookies,
    withParams,
} from "itty-router-extras";

const router = ThrowableRouter({ base: "" });

router.get("/test", withContent, withCookies, withParams, () => json({ test: "test" }, { status: 200 }));

router.get("/error1", () => error(500, "Test message"));
router.get("/error2", () => error(500, { test: "Error" }));

router.get("/missing1", () => missing("Not found"));
router.get("/missing2", () => missing({ test: "Not found" }));

router.get("/missing1", () => status(201, "Created"));
router.get("/missing2", () => status(201, { test: "Created" }));

router.get("/text", () => text("Text"));

router.get("/bad", () => {
    throw new StatusError(400, "Bad Request");
});
