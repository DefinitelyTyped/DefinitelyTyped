import * as React from "react";
import Holder from "react-holder";

export class ReactHolderTest extends React.Component {
    public render() {
        return (
            <div>
                <Holder
                    // width and height can be a number or a string
                    width="100%"
                    height="200px"

                    // default: false
                    updateOnResize={true}
                    className={'my-custom-class'}
                    />
            </div>
        );
    }
}
