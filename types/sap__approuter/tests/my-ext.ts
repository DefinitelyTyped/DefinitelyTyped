/**
 * extension example for testing purposes
 */
module.exports = {
    insertMiddleware: {
        first: [
            function logRequest(req, res, next) {
                console.log("Got request %s %s", req.method, req.url);
            },
        ],
        beforeRequestHandler: [
            {
                path: "/my-ext",
                handler: function myMiddleware(req, res, next) {
                    res.end("Request handled by my extension!");
                },
            },
        ],
    },
};
