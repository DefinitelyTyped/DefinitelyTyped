import * as React from "react";
import { StatelessComponent } from "react";
import { render } from "react-dom";
import reactCSS, { hover, loop, LoopableProps, InjectedHoverProps } from "reactcss";

const TestHover = hover(
    ({ hover }) => {

        const styles = reactCSS({
            default: {
                title: {
                    color: "black"
                }
            },
            hover: {
                title: {
                    color: "blue"
                }
            }
        }, { hover });

        const list = ["First!", "Second!", "Third!"];

        return (
            <div>
                <div style={ styles.title }>
                    Cool Title!
                </div>

                {
                    list.map((item, index) => (
                        <TestLoop { ...loop(index, list.length) }>
                            { item }
                        </TestLoop>
                    ))
                }
            </div>
        )
    }
);

const TestLoop: StatelessComponent<LoopableProps> = (props) => {
    const styles = reactCSS({
        default: {
            element: {
                background: "red"
            }
        },
        even: {
            element: {
                background: "blue"
            }
        },
        odd: {
            element: {
                background: "yellow"
            }
        },
        "first-child": {
            element: {
                background: "green"
            }
        },
        "last-child": {
            element: {
                background: "orange"
            }
        },
        "nth-child-1": {
            element: {
                background: "black"
            }
        }
    }, {
        even          : props.even,
        odd           : props.odd,
        "first-child" : props["first-child"],
        "last-child"  : props["last-child"],
        "nth-child-1" : props["nth-child-1"],
    });

    return (<div style={ styles.element }>{ props.children }</div>);
}
