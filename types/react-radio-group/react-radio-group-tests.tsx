import * as React from 'react';
import { Radio, RadioGroup, RadioGroupProps, Value } from "react-radio-group";

class ReactRadioGroup extends React.Component<RadioGroupProps> {
    constructor(props: RadioGroupProps) {
        super(props);
    }

    handleChange(value: Value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                <RadioGroup name="radioGroup" onChange={this.handleChange} selectedValue={2}>
                    <Radio id="Option A" value="a" />
                    <Radio id="Option B" value={2} />
                    <Radio id="Option C" value={["hello"]} disabled />
                </RadioGroup>
            </div>
        );
    }
}
