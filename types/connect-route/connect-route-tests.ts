import connect from "connect";
import connectRoute from "connect-route";

const app = connect();

app.use(connectRoute(function(router) {
    router.get("/", function(req, res, next) {
        res.end("index");
    });

    router.get("/home", function(req, res, next) {
        res.end("home");
    });

    router.get(
        "/home/:id",
        function(req, res, next) {
            res.end("home " + req.params.id);
        },
    );

    router.post("/home", function(req, res, next) {
        res.end("POST to home");
    });

    router.add("OPTIONS", "/home", (res, req, next) => {
    });
}));

app.use(
    "/users",
    connectRoute(function(router) {
        router.get("/", function(req, res, next) {
            res.end("users list");
        });

        router.get(
            "/:id",
            function(req, res, next) {
                res.end("users " + req.params.id);
            },
        );

        router.post(
            "/",
            function(req, res, next) {
                res.end("POST to users");
            },
        );
    }),
);
app.listen(3000);
