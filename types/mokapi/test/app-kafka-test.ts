import { app, KafkaEventMessage, KafkaProduceResult, KafkaTopic } from "mokapi";

const topic: KafkaTopic = app.kafka().topic("foo");
topic.produce({ data: 123 });
topic.produce({ value: {} });
topic.produce([{ key: "foo" }, { key: "bar" }]);
topic.produce({}, {
    result: (r: KafkaProduceResult): void => {
        r.messages[0].offset;
    },
});
topic.produce({ data: 123 }, { retry: { initialRetryTime: 1000 } });
topic.message((m: KafkaEventMessage) => {
    m.key = "foo";
    // @ts-expect-error
    m.api = "";
});

app.kafka().message((m: KafkaEventMessage) => {
    m.value = "";
});
app.kafka().produce("topic", {});
app.kafka().produce("topic", [{}, {}]);
app.kafka().produce("topic", {}, { retry: { factor: 10 } });
// @ts-expect-error
app.kafka().produce("topic", {}, { retry: { factor: "" } });
app.kafka().produceAsync("topic", {}).then(k => k.produce("topic", {}));

app.kafka().topic("foo").message((m: KafkaEventMessage) => {
    m.key = "foo";
    m.value = "";
    // @ts-expect-error
    m.topic = "foo";
    m.schemaId = 123;
    // @ts-expect-error
    m.partition = 123;
    // @ts-expect-error
    m.offset = 123;
    // @ts-expect-error
    m.api = "";
});

app.kafka().api("title").topic("foo").message((m: KafkaEventMessage) => {});
// @ts-expect-error
app.kafka().api(123).topic("foo").message((m: KafkaEventMessage) => {});
app.api("title").kafka().topic("foo").message((m: KafkaEventMessage) => {});
// @ts-expect-error
app.api(123).kafka().topic("foo").message((m: KafkaEventMessage) => {});
