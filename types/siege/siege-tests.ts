import siege = require("siege");

siege()
    .on(3000)
    .for(10000).times
    .get("/")
    .attack();

siege("node /path/to/app.js")
    .on(3000)
    .get("/")
    .attack();

siege(__dirname + "/app.js")
    .wait(1000)
    .get("/")
    .attack();

siege()
    .get("/")
    .post("/hello", { hello: "world" })
    .attack();

siege()
    .for(10000).times
    .get("/").for(2).seconds
    .get("/about").for(3000).times
    .get("/contact")
    .attack();

siege()
    .concurrent(100)
    .get("/")
    .attack();

siege()
    .withCookie
    .post("/login", { user: "password" }).for(1).times
    .get("/")
    .attack();
