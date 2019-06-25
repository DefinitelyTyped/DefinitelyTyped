import * as React from "react";
import Joyride, { Step, State } from "react-joyride";

class NewComponent extends React.Component<undefined, undefined> {
    j: Joyride;

    steps: Step[] = [{
        title: "Title",
        content: "Hurray",
        target: ".selectable",
        placement: "top-end",
        event: "click",
        styles: {
            options: {
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
            }
        },
    },
    {
        target: ".other-selectable",
        content: (<div>Also works</div>)
    }];

    render() {
        return <Joyride ref="j" run={true} steps={this.steps} callback={this.onCallback} />;
    }

    doStuff() {
        this.j.next();
        this.j.back();

        this.j.reset(true);
        this.j.reset(false);

        this.j.addTooltip(this.steps[0]);

        const { title, placement } = this.j.getProgress().step;
    }

    onCallback(data: State) {
        return;
    }
}
