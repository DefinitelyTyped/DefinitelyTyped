import { publish, publishAsync, PublishResult } from "mokapi/mqtt";

publish();
// @ts-expect-error
publish(1);
// @ts-expect-error
publish({ topic: 123 });
const result: PublishResult = publish({ value: "foo" });
// @ts-expect-error
publish({ cluster: 123 });
// @ts-expect-error
publish({ topic: 123 });
publish({
    value: "foo",
});
publish({
    // @ts-expect-error
    value: {},
});
publish({
    retain: true,
    value: "foo",
});
publish({
    cluster: "foo",
    value: "foo",
});

publishAsync();
publishAsync({ topic: "foo", value: "foo" });

const args: PublishResult = publish({ value: "foo" });
// @ts-expect-error
args.cluster = "foo";
// @ts-expect-error
args.topic = "foo";
// @ts-expect-error
args.value = "foo";
