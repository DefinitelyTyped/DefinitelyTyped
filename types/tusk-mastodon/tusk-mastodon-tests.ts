import Tusk = require("tusk-mastodon");

const T = new Tusk({
    "access_token": "string",
    "api_url": "string",
    "timeout_ms": 1,
});

new Tusk({
    "access_token": "string",
});

T.put("test", {}).then().catch();
T.get("test", {}).then().catch();
T.post("test", {}).then().catch();
T.patch("test", {}).then().catch();
T.delete("test", {}).then().catch();

T.request("GET", "test", {}).then().catch();

T.put("test").then().catch();
T.get("test").then().catch();
T.post("test").then().catch();
T.patch("test").then().catch();
T.delete("test").then().catch();

T.request("GET", "test").then().catch();

T.getAuth().access_token;
T.setAuth({ "access_token": "string" });

const _testFormEncodeParams: string = T.formEncodeParams({});
