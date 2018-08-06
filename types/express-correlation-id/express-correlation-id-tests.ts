import * as express from "express";
import correlator from "express-correlation-id";

const app = express();
app.use(correlator());
app.use(correlator({}));
app.use(correlator({ header: "x-correlation-id" }));

const x: string = correlator.getId() || "";
