import { db } from "@arangodb";

const context = (module as Foxx.Module).context;

interface User {
    username: string;
    password?: string;
}
const coll = context.collection("users")!;
coll.save({ username: "user" });
const doc = coll.any();
console.log(doc.username);

const users = coll as ArangoDB.Collection<User>;
const admin = users.firstExample({ username: "admin" })!;
users.update(admin, { password: "hunter2" });
