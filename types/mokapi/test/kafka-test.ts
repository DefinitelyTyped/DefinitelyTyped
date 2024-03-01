import { KafkaEventHandler, KafkaRecord, produce, ProduceResult } from "mokapi/kafka";

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

// @ts-expect-error
let h: KafkaEventHandler = () => {};
// @ts-expect-error
h = (r: KafkaRecord) => {};
h = (r: KafkaRecord): boolean => {
    return false;
};
h = (record: KafkaRecord): boolean => {
    // @ts-expect-error
    record.offset = 12;
    // @ts-expect-error
    record.key = 123;
    record.key = "key";
    // @ts-expect-error
    record.value = 12;
    record.value = "value";
    // @ts-expect-error
    record.headers = 123;
    record.headers = {};
    record.headers = null;
    record.headers = { foo: "bar" };

    return false;
};
