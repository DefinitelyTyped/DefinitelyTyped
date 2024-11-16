const client = ZAFClient.init();
client.context().then((context) => {});
client.metadata().then((metadata) => {});
client.get("ticket").then((ticket) => {});
client.invoke("ticket.comment.appendText", "Hello, World!");
client.on("resize", (data) => {});
client.trigger("my_event", { foo: "bar" });
client.request({
    url: "https://example.com",
    type: "GET",
}).then((data) => {});
