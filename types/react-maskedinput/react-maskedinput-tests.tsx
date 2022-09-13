import * as React from "react";
import MaskedInput from "react-maskedinput";

class Test extends React.Component {
    render() {
        return (
            <MaskedInput mask="111"
                         placeholderChar="X"
                         formatCharacters={
                            {
                                a: {
                                    validate: (char: string) => char,
                                    transform: (char: string) => char
                                }
                            }
                         }
                         name="react-maskedinput-test"
                         placeholder="XXX"
                         disabled={false}
                />
        );
    }
}
