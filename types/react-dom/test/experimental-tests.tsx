import ReactDOM = require("react-dom");
import ReactDOMClient = require("react-dom/client");
import "react/experimental";
import "react-dom/experimental";

const useFormState = ReactDOM.experimental_useFormState;
const useFormStatus = ReactDOM.experimental_useFormStatus;

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

        const [state, dispatch] = useFormState(action, 1);
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

        const [state, dispatch] = useFormState(action, 1, "/permalink");
        return (
            <form action={dispatch}>
                <span>Count: {state}</span>
                <input type="text" name="incrementAmount" defaultValue="5" />
            </form>
        );
    }

    function Page4() {
        async function action(state: number, type: "increment" | "decrement") {
            return state + (type === "increment" ? 1 : -1);
        }

        const [state, dispatch] = useFormState(action, 1, "/permalink");
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
    ReactDOMClient.hydrateRoot(document.body, <Page1 />, { experimental_formState: formState });
}
