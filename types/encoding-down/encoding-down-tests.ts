import { AbstractLevelDOWN } from 'abstract-leveldown';
import EncodingDOWN from 'encoding-down';

const test = (encoding: EncodingDOWN) => {
    encoding.put("key", "value", (err?: Error) => { });
    encoding.put(1, "value", { something: true }, (err?: Error) => { });

    encoding.get("key", (err?: Error) => { });
    encoding.get(1, { something: true }, (err: Error | undefined, value: any) => { });
};

// $ExpectType void
test(new EncodingDOWN(new AbstractLevelDOWN("here")));
