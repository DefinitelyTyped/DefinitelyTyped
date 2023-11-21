/// <reference types="../canary"/>
import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");

function preloadTest() {
    function Component() {
        ReactDOM.preload("foo", { as: "style", fetchPriority: "high", integrity: "sad" });
        ReactDOM.preload("bar", {
            as: "font",
            // @ts-expect-error Unknown fetch priority
            fetchPriority: "unknown",
        });
        ReactDOM.preload("baz", { as: "script", crossOrigin: "use-credentials" });
        ReactDOM.preload("baz", {
            // @ts-expect-error
            as: "title",
        });
        ReactDOM.preload("bar", {
            as: "font",
            nonce: "0xeac1",
        });
        ReactDOM.preload("foo", {
            as: "image",
            imageSrcSet: "fooset",
            imageSizes: "foosizes",
            referrerPolicy: "no-referrer",
        });
        ReactDOM.preload("foo", {
            as: "image",
            // @ts-expect-error Not specified in https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
            referrerPolicy: "unknown-policy",
        });
        ReactDOM.preload("foo", {
            as: "script",
            // Undesired. Should not typecheck.
            imageSrcSet: "fooset",
            imageSizes: "foosizes",
        });

        ReactDOM.preinit("foo", {
            as: "style",
            crossOrigin: "anonymous",
            fetchPriority: "high",
            precedence: "high",
            integrity: "sad",
            nonce: "0xeac1",
        });
        ReactDOM.preinit("bar", {
            // @ts-expect-error Only available in preload
            as: "font",
        });
        ReactDOM.preinit("baz", {
            as: "script",
            // @ts-expect-error Unknown fetch priority
            fetchPriority: "unknown",
        });
        ReactDOM.preinit("baz", {
            // @ts-expect-error
            as: "title",
        });
        ReactDOM.preinit("baz", {
            as: "script",
            nonce: "0xeac1",
        });

        // @ts-expect-error
        ReactDOM.preconnect();
        ReactDOM.preconnect("foo");
        ReactDOM.preconnect("bar", { crossOrigin: "anonymous" });

        // @ts-expect-error
        ReactDOM.prefetchDNS();
        ReactDOM.prefetchDNS("foo");
        ReactDOM.prefetchDNS(
            "bar", // @ts-expect-error prefetchDNS does not accept any options at the moment
            {},
        );

        // @ts-expect-error
        ReactDOM.preloadModule();
        ReactDOM.preloadModule("browserdefault");
        ReactDOM.preloadModule("browserdefault", {
            as: "script",
            crossOrigin: "use-credentials",
            integrity: "0xeac1",
            nonce: "secret",
        });
        ReactDOM.preloadModule("worker", { as: "worker" });
        ReactDOM.preloadModule("worker", {
            // @ts-expect-error Unknown request destination
            as: "serviceworker",
        });

        // @ts-expect-error
        ReactDOM.preinitModule();
        ReactDOM.preinitModule("browserdefault");
        ReactDOM.preinitModule("browserdefault", { as: "script", crossOrigin: "use-credentials", integrity: "0xeac1" });
        ReactDOM.preinitModule("data", {
            // @ts-expect-error Not supported (yet)
            as: "json",
        });
    }
}

const useFormState = ReactDOM.useFormState;
const useFormStatus = ReactDOM.useFormStatus;

function Status() {
    const status = useFormStatus();
    if (!status.pending) {
        return <div>No pending action</div>;
    } else {
        const { action, data, method } = status;
        const foo = data.get("foo");
        return (
            <div>
                {`Pending action ${
                    typeof action === "string" ? action : action.name
                }: foo is ${foo}, method is ${method}`}
            </div>
        );
    }
}

function formTest() {
    function Page1() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(action, 1);

        function actionExpectingPromiseState(state: Promise<number>) {
            return state.then((s) => s + 1);
        }

        useFormState(
            // @ts-expect-error
            actionExpectingPromiseState,
            Promise.resolve(1),
        );
        useFormState(
            action,
            // @ts-expect-error
            Promise.resolve(1),
        );
        // $ExpectType number
        useFormState<Promise<number>>(action, 1)[0];

        useFormState(
            async (
                prevState: // only needed in TypeScript 4.9
                    // 5.0 infers `number` whereas 4.9 infers `0`
                    number,
            ) => prevState + 1,
            0,
        )[0];
        // $ExpectType number
        useFormState(
            async (prevState) => prevState + 1,
            // @ts-expect-error
            Promise.resolve(0),
        )[0];

        return (
            <button
                onClick={() => {
                    dispatch();
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page2() {
        async function action(state: number) {
            return state + 1;
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(action, 1, "/permalink");
        return (
            <form action={dispatch}>
                <span>Count: {state}</span>
                <input type="text" name="incrementAmount" defaultValue="5" />
            </form>
        );
    }

    function Page3() {
        function actionSync(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(actionSync, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
    }

    function Page4() {
        async function action(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [
            // $ExpectType number
            state,
            dispatch,
        ] = useFormState(action, 1, "/permalink");
        return (
            <button
                onClick={() => {
                    dispatch("decrement");
                }}
            >
                count: {state}
            </button>
        );
    }

    const formState = [1, "", "", 0] as unknown as ReactDOMClient.ReactFormState;
    ReactDOMClient.hydrateRoot(document.body, <Page1 />, { formState });
}
