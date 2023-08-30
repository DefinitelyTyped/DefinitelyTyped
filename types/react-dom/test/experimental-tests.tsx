import ReactDOM = require("react-dom");
import "react/experimental";
import "react-dom/experimental";

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
