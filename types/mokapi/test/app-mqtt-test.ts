import { app, MqttEventMessage, MqttPublishResult, MqttTopicRouter } from "mokapi";

const topic: MqttTopicRouter = app.mqtt().topic("foo");
topic.publish({ data: 123 });
topic.publish({ value: {} });
topic.publish({ value: "foo" });
topic.publish({}, {
    result: (r: MqttPublishResult): void => {
        const s: string = r.api;
    },
});
topic.publish({ data: 123 }, { retry: { initialRetryTime: 1000 } });
topic.message((m: MqttEventMessage) => {
    m.value = "foo";
    // @ts-expect-error
    m.api = "";
});

app.mqtt().message((m: MqttEventMessage) => {
    m.value = "";
});
app.mqtt().publish("topic", {});
app.mqtt().publish("topic", {});
app.mqtt().publish("topic", {}, { retry: { factor: 10 } });
// @ts-expect-error
app.mqtt().publish("topic", {}, { retry: { factor: "" } });
app.mqtt().publishAsync("topic", {}).then(k => k.publish("topic", {}));
