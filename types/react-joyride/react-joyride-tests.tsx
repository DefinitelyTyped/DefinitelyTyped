import * as React from "react";
import Joyride, { Step } from "react-joyride";

class NewComponent extends React.Component<undefined, undefined> {
    j: Joyride;

    steps: Step[] = [{
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
        },
        {
            selector: ".other-selectable",
            text: (<div>Also works</div>)
        }];

    render() {
        return <Joyride ref="j" run={true} holePadding={4} resizeDebounceDelay={100} steps={this.steps} autoStart={true} />;
    }

    doStuff() {
        this.j.next();
        this.j.back();

        this.j.reset(true);
        this.j.reset(false);

        this.j.addTooltip(this.steps[0]);

        const { title, position } = this.j.getProgress().step;
    }
}
