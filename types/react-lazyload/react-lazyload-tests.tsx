import * as React from "react";
import LazyLoad, { forceCheck } from "react-lazyload";

interface State {
    arr: string[];
}

class Normal extends React.Component<{}, State> {
    static createArray = (items= 200) => {
        const arr: string[] = [];
        for (let i = 0; i < items; i++) {
            arr.push(`${i}`);
        }
        return arr;
    }
    state = {
        arr: Normal.createArray()
    };

    componentDidMount() {
        forceCheck();
    }

    render() {
        return (
            <div>
                {this.state.arr.map((el, index) => {
                    return (
                        <LazyLoad once={true} resize={true} key={index} height={200} offset={50}>
                            <p id={`${index}`}  >
                                count={index + 1}
                            </p>
                        </LazyLoad>
                    );
                })}
            </div>
        );
    }
}
