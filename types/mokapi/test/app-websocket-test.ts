import { app, WebsocketChannelRouter, WebsocketEventConnect, WebsocketEventMessage, WebsocketSendResult } from "mokapi";

const channel: WebsocketChannelRouter = app.websocket().channel("foo");
channel.send({ data: 123 });

channel.connect((m: WebsocketEventConnect) => {
    // @ts-expect-error
    m.message = "foo";
    m.client.send("foo");
    m.reply({ data: 123 });
    m.broadcast({ data: 123 });
    m.channel.clients[0].send({});
});

channel.message((m: WebsocketEventMessage) => {
    // @ts-expect-error
    m.message = "foo";
    m.reply({ data: 123 });
});

app.websocket().message((m: WebsocketEventMessage) => {
    m.reply({ data: 123 });
});

// @ts-expect-error
app.websocket().send({});
app.websocket().send("channel", {}, {
    retry: { factor: 10 },
    result: (r: WebsocketSendResult) => {
        r.api;
    },
});
app.websocket().api("title").send("channel", {});
