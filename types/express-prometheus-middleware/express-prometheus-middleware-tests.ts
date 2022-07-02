import express = require("express");
import promMid = require("express-prometheus-middleware");
const app = express();
const PORT = 9091;

// Examples lifted from https://www.npmjs.com/package/express-prometheus-middleware
app.use(
    promMid({
        metricsPath: "/metrics",
        collectDefaultMetrics: true,
        requestDurationBuckets: [0.1, 0.5, 1, 1.5],
        requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
        responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
        authenticate: req => req.headers.authorization === "Basic dXNlcjpwYXNzd29yZA==",
        extraMasks: [/..:..:..:..:..:../],
        prefix: "app_prefix_",
        customLabels: ["contentType"],
        transformLabels(labels, req) {
            // eslint-disable-next-line no-param-reassign
            labels.contentType = req.headers["content-type"] as string;
        },
        normalizeStatus: true,
    }),
);

app.get("/hello", (req, res) => {
    console.log("GET /hello");
    const { name = "Anon" } = req.query;
    res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
    console.log(`Example api is listening on http://localhost:${PORT}`);
});
