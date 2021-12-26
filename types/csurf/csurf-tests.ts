import cookieParser = require("cookie-parser");
import csrf = require("csurf");
import { urlencoded } from "body-parser";
import express = require("express");
import { Router } from "express";

// create express app
const app = express();

// create api router
const api = createApiRouter();

// mount api before csrf is appended to the app stack
app.use('/api', api);

// now add csrf and other middleware, after the "/api" was mounted
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/form', (req, res) => {
    // pass the csrfToken to the view
    res.render('send', { csrfToken: req.csrfToken() });
});

app.post('/process', (req, res) => {
    res.send('csrf was required to get here');
});

function createApiRouter() {
    const router = Router();

    router.post('/getProfile', (req, res) => {
        res.send('no csrf to get here');
    });

    return router;
}
