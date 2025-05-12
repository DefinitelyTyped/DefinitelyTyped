import React from "react";
import {
    customFetchNui,
    debugData,
    debugEvent,
    NuiProvider,
    safeFetch,
    useNuiCallback,
    useNuiEvent,
    useNuiRequest,
} from "react-fivem-nui-utils";

// Test useNuiCallback
function TestCallback() {
    useNuiCallback(
        "myApp",
        "myMethod",
        (data) => console.log("Success:", data),
        (err) => console.error("Error:", err),
    );
    return <div>Callback</div>;
}

// Test useNuiEvent
function TestEvent() {
    useNuiEvent("myApp", "myEvent", (data) => {
        console.log("Event data:", data);
    });
    return <div>Event</div>;
}

// Test useNuiRequest
function TestRequest() {
    const { send } = useNuiRequest();
    React.useEffect(() => {
        send("myMethod", { foo: "bar" }).then(console.log);
    }, [send]);
    return <div>Request</div>;
}

// Test safeFetch
async function testSafeFetch() {
    await safeFetch("myMethod", { foo: "bar" }, { mock: true });
}

// Test customFetchNui
async function testCustomFetchNui() {
    await customFetchNui("myMethod", { foo: "bar" });
}

// Test debugData
function testDebugData() {
    debugData("myMethod", { foo: "bar" });
}

// Test debugEvent
function testDebugEvent() {
    debugEvent({ app: "myApp", method: "myMethod", data: { foo: "bar" } });
}

// Test NuiProvider
function App() {
    return (
        <NuiProvider resource="myResource">
            <TestCallback />
            <TestEvent />
            <TestRequest />
        </NuiProvider>
    );
}

export default App;
