import { db } from "@arangodb";
import { md5 } from "@arangodb/crypto";
import { createRouter } from "@arangodb/foxx";

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
    if (req.is("json")) res.throw("i'm a teapot");
    next();
});
