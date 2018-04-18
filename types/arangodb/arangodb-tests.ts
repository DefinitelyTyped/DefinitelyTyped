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
users.update(admin, { password: "hunter2" });
