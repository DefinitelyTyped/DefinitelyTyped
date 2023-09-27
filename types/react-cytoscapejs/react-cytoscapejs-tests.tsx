import * as React from "react";
import CytoscapeComponent from "react-cytoscapejs";

const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
    {
        data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
];

export class Example extends React.Component {
    render(): React.ReactElement {
        return (
            <div>
                <CytoscapeComponent
                    elements={CytoscapeComponent.normalizeElements(elements)}
                    style={{ width: "600px", height: "600px" }}
                    panningEnabled={false}
                    userPanningEnabled={false}
                    autolock={false}
                    get={(obj, key) => (obj != null ? obj[key] : null)}
                    toJson={obj => obj}
                    diff={(a, b) => a !== b}
                    forEach={(arr, iterator) => arr.forEach(iterator)}
                    headless={false}
                    styleEnabled={false}
                    textureOnViewport={false}
                    motionBlur={false}
                    motionBlurOpacity={0.2}
                    wheelSensitivity={1}
                    pixelRatio="auto"
                />
            </div>
        );
    }
}
