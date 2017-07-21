import * as React from "react";
import { StatelessComponent } from "react";
import { render } from "react-dom";
import reactCSS, { hover, loop, InjectedLoopableProps, InjectedHoverProps } from "reactcss";

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
                        <TestLoop
                            key={ index }
                            { ...loop(index, list.length) }
                        >
                            { item }
                        </TestLoop>
                    ))
                }
            </div>
        )
    }
);

const TestLoop: StatelessComponent<InjectedLoopableProps> = (props) => {
    const styles = reactCSS({
        default: {
            element: {
                width: "200px",
                border: "1px solid black"
            }
        },
        "first-child": {
            element: {
                borderTopLeftRadius: "2px",
                borderTopRightRadius: "2px"
            }
        },
        "last-child": {
            element: {
                borderBottomLeftRadius: "2px",
                borderBottomRightRadius: "2px"
            }
        }
    }, props);

    return (<div style={ styles.element }>{ props.children }</div>);
}
