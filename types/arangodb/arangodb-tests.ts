import { db, aql } from "@arangodb";
import { md5 } from "@arangodb/crypto";
import { createRouter } from "@arangodb/foxx";
import sessionsMiddleware = require("@arangodb/foxx/sessions");
import jwtStorage = require("@arangodb/foxx/sessions/storages/jwt");
import cookieTransport = require("@arangodb/foxx/sessions/transports/cookie");

console.warnStack(new Error(), "something went wrong");

interface User {
    username: string;
    password?: string;
}
const coll = module.context.collection("users")!;
coll.save({ username: "user" });
const doc = coll.any();
console.log(doc.username);

const users = coll as ArangoDB.Collection<User>;
const admin = users.firstExample({ username: "admin" })!;
users.update(admin, { password: md5("hunter2") });
console.logLines("user", admin._key, admin.username);

const query = aql`
    FOR u IN ${users}
    RETURN u
`;

db._createDocumentCollection("bananas").ensureIndex({
    type: "hash",
    unique: true,
    fields: ["color", "shape"]
});

const router = createRouter();
module.context.use(router);

router.get("/", (req, res) => {
    if (req.cookie("sid", { secret: "keyboardcat" })) {
        res.set("content-type", "text/plain");
        res.write("Welcome back, Commander");
    } else {
        res.json({ success: false });
    }
});

router.use((req, res, next) => {
    if (req.is("json")) res.throw("too many requests");
    next();
});

router.use(
    sessionsMiddleware({
        storage: jwtStorage({ algorithm: "none" }),
        transport: "header"
    })
);
router.use(
    sessionsMiddleware({
        storage: jwtStorage({ algorithm: "HS512", secret: "tacocat" }),
        transport: cookieTransport({ secret: "banana", algorithm: "sha256" })
    })
);
