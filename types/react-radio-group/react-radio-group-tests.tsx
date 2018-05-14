import * as React from 'react';
import { Radio, RadioGroup } from "react-radio-group";

class ReactRadioGroup extends React.Component<RadioGroup.RadioGroupProps> {
    handleChange: RadioGroup.RadioGroupProps['onChange'] = value => {
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
