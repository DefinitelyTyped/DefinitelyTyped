import Router = require("express-promise-router");

const router = Router();

router.get("/", (req, res) => {
    // equivalent to calling next()
    return Promise.resolve('next');
});

router.post("/", async (req, res) => {
    // ...
});
