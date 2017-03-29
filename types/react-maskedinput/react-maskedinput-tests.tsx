import * as React from "react";
import * as MaskedInput from "react-maskedinput";

class Test extends React.Component<any, any> {
    render() {
        return (
            <MaskedInput mask="111"
                         placeholderChar="X"
                         formatCharacter={
                            {
                                a: {
                                    validate: (char: string) => char,
                                    transform: (char: string) => char
                                }
                            }
                         } />
        );
    }
}
