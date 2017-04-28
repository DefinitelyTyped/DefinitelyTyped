import React = require("react");
import Joyride from "react-joyride";

class NewComponent extends React.Component<undefined, undefined> {
    j: Joyride;

    render() {
        return <Joyride ref="j" run holePadding={4} resizeDebounceDelay={100} />;
    }

    doStuff() {
        this.j.start(/*autorun*/ true);

        this.j.next();

        this.j.reset(true);
        this.j.reset(false);

        const { title, position } = this.j.getProgress().step;

        this.j.parseSteps({
            title: "Title",
            text: "Hurray",
            selector: ".selectable",
            position: "top-right",
            type: "click",
            style: {
                backgroundColor: "#000",
                borderRadius: "0",
                color: "#000",
                mainColor: "#fff",
                textAlign: "left",
                width: "2px",
                beacon: {
                    offsetX: 10,
                    offsetY: 10,
                    inner: "#000",
                    outer: "#000"
                },
                button: {
                    display: "block"
                },
                skip: {
                    color: "#000"
                },
                hole: {
                    backgroundColor: "#000",
                }
            },
            name: "my-name",
            parent: "MyParent"
        });
    }
}
