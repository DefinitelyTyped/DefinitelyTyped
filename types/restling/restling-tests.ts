import * as rest from "restling";

rest.request("http://localhost").then(console.log);
rest.request("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.del("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.get("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.head("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.patch("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.post("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.put("http://localhost", { agent: "test", timeout: 5000 }).then(console.log);

rest.patchJson("http://localhost", { num: 100, str: "string" }, { agent: "test", timeout: 5000 }).then(console.log);

rest.postJson("http://localhost", { num: 100, str: "string" }, { agent: "test", timeout: 5000 }).then(console.log);

rest.putJson("http://localhost", { num: 100, str: "string" }, { agent: "test", timeout: 5000 }).then(console.log);

rest.settleAsync([
    { url: "http://localhost" },
    { url: "http://localhost" }
]).then(console.log);
rest.settleAsync({
    r1: { url: "http://localhost" },
    r2: { url: "http://localhost" }
}).then(console.log);

rest.allAsync([
    { url: "http://localhost" },
    { url: "http://localhost" }
]).then(console.log);
rest.allAsync({
    r1: { url: "http://localhost" },
    r2: { url: "http://localhost" }
}).then(console.log);
