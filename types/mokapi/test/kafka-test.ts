import { produce, produceAsync, ProduceResult } from "mokapi/kafka";

produce();
// @ts-expect-error
produce(1);
// @ts-expect-error
produce({ topic: 123 });
const result: ProduceResult = produce({});
// @ts-expect-error
produce({ cluster: 123 });
// @ts-expect-error
produce({ topic: 123 });
// @ts-expect-error
produce({ partition: "foo" });
// @ts-expect-error
produce({ headers: "foo" });
// @ts-expect-error
produce({ headers: 123 });
produce({
    cluster: "foo",
    topic: "bar",
    partition: 1,
    key: "foo",
    value: { name: "foo", value: 123 },
    headers: {
        "Content-Type": "application/json",
    },
});
produce({
    // @ts-expect-error
    messages: {},
});
produce({
    messages: [{}],
});
produce({
    messages: [{
        partition: 0,
        key: "foo",
        data: { name: "bar" },
        value: "{\"name\": \"bar\"}",
        headers: {
            "message-key": "123456",
        },
    }],
});

produceAsync();
produceAsync({ topic: "foo" });

const args: ProduceResult = produce({});
// @ts-expect-error
args.cluster = "foo";
// @ts-expect-error
args.topic = "foo";
// @ts-expect-error
args.partition = 12;
// @ts-expect-error
args.offset = 12;
// @ts-expect-error
args.key = "foo";
// @ts-expect-error
args.value = "foo";
// @ts-expect-error
args.headers = "foo";
