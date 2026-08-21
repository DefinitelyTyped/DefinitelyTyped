import {
    ArrayRemoteValue,
    DateRemoteValue,
    NodeProperties,
    NodeRemoteValue,
    RemoteValue,
} from "selenium-webdriver/bidi/remoteValue";

function testRemoteValues() {
    const arrayRemoteValue: ArrayRemoteValue = {
        type: "array",
        value: [],
    };

    const dateRemoteValue: DateRemoteValue = {
        type: "date",
        value: "2023-01-01T00:00:00Z",
    };

    const nodeProperties: NodeProperties = {
        nodeType: 1,
        childNodeCount: 2,
    };

    const nodeRemoteValue: NodeRemoteValue = {
        type: "node",
        value: nodeProperties,
    };

    const remoteValue1: RemoteValue = arrayRemoteValue;
    const remoteValue2: RemoteValue = dateRemoteValue;
    const remoteValue3: RemoteValue = nodeRemoteValue;

    console.log("Passed: RemoteValue types are correctly assigned");
}
testRemoteValues();
