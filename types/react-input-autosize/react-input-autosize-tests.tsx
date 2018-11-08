import * as React from 'react';
import AutosizeInput, { AutosizeInputProps } from 'react-input-autosize';

class Test extends React.Component<AutosizeInputProps> {
    input: HTMLInputElement;
    auto: AutosizeInput;

    inputRef = (ref: HTMLInputElement) => {
        this.input = ref;
    }

    onChange: React.ChangeEventHandler<HTMLInputElement> = _event => {
        const input = this.auto.getInput();
        input.blur();
    }

    render() {
        return (
            <AutosizeInput
                {...this.props}
                defaultValue="hello"
                value="goodbye"
                minWidth="400"
                ref="auto"
                inputRef={this.inputRef}
                id="testInput"
                placeholder="Testing 1, 2, 3"
                placeholderIsMinWidth
                onChange={this.onChange}
            />
        );
    }
}
