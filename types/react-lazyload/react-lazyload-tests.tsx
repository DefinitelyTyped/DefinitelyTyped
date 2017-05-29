import * as React from "react";
import LazyLoad from "react-lazyload";

interface State {
    arr: string[];
}

class Normal extends React.Component<{}, State> {
    constructor() {
        super();
        let arr: string[] = [];
        for (let i = 0; i < 200; i++) {
            arr.push(`${i}`);
        }
        this.state = { arr };
    }
    render() {
        return (
            <div>
                {this.state.arr.map((el, index) => {
                    return (
                        <LazyLoad once={true} key={index} height={200} offset={50}>
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
