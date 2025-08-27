import * as queryUtil from "mysql-query-util";

queryUtil.setConnection({ host: "localhost", user: "root", password: "123456789", database: "restaurant" });

queryUtil.select(
    "users",
    ["name", "age"],
    [
        ["age", "!=", 13],
        ["AND", "gender", "like", "male"],
        ["OR", "id", "=", 1],
    ],
);
queryUtil.select({ tableName: "users" });

queryUtil.insert("users", { name: "Uchenna", age: 12 });
queryUtil.insert({ tableName: "users", data: { name: "Uchenna", age: 12 } });

queryUtil.update("users", { age: 12 }, []);
queryUtil.update({ tableName: "users", data: { age: 27 }, params: [["id", "=", 55]] });

queryUtil.delete("users", [["id", "=", 39]]);
queryUtil.delete({ tableName: "users", params: [["id", "=", 39]] });

queryUtil.query("select", "users");
