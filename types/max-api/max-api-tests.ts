import { default as maxAPI } from "max-api";

const { MAX_ENV, MESSAGE_TYPES, POST_LEVELS } = maxAPI;

(async () => {
    await maxAPI.outlet("output", "to", "outlet");
    await maxAPI.outlet("num_out", 5);
    await maxAPI.outlet("list_out", [1, "two", 3, "four", 5]);

    await maxAPI.outletBang();

    await maxAPI.post("output to max window");
    await maxAPI.post("output", "to", "max", "window");
    await maxAPI.post("output info to max window", POST_LEVELS.INFO);
    await maxAPI.post("output warning to max window", POST_LEVELS.WARN);
    await maxAPI.post("output error to max window", POST_LEVELS.ERROR);

    await maxAPI.post({ MAX_ENV, MESSAGE_TYPES, POST_LEVELS });

    const dictId = "dictId";

    const dict = await maxAPI.getDict(dictId);
    await maxAPI.post(dict);

    await maxAPI.setDict(dictId, { test: "me", nested: { counter: 1 } });
    await maxAPI.updateDict(dictId, "nested.counter", 2);

    const myHandler = async () => {
        await maxAPI.post("received myHandler message");
    };

    maxAPI.addHandler("myHandler", myHandler);
    maxAPI.removeHandler("myHandler", myHandler);

    const handlers = {
        [MESSAGE_TYPES.BANG]: async () => {
            await maxAPI.post("recieved a bang");
        },
        [MESSAGE_TYPES.NUMBER]: async (n: number) => {
            await maxAPI.post(`received a number: ${n}`);
        },
        [MESSAGE_TYPES.LIST]: async (...elements: [number, ...unknown[]]) => {
            await maxAPI.post(`received a list: ${elements}`);
        },
        myHandler2: async () => {
            await maxAPI.post("received myHandler2 message");
        },
        myHandlerWithArgs: async (arg1: any, arg2: any) => {
            await maxAPI.post(`received myHandlerWithArgs message with: ${arg1}, ${arg2}`);
        },
        myHandlerWithTypedArgs: async (arg1: string, arg2: number) => {
            await maxAPI.post(`received myHandlerWithTypedArgs message with: ${arg1}, ${arg2}`);
        },
        [MESSAGE_TYPES.ALL]: async (handled: boolean, ...args: any[]) => {
            if (handled) return;
            await maxAPI.post(`unhandled event: ${args}`);
        },
    };

    maxAPI.addHandlers(handlers);
})();
