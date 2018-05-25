import * as React from 'react';
import { Radio, RadioGroup } from "react-radio-group";

class ReactRadioGroup extends React.Component<RadioGroup.RadioGroupProps, { selectedValue: React.InputHTMLAttributes<HTMLInputElement>['value'] }> {
    state = {
        selectedValue: 2,
    };

    handleChange: RadioGroup.RadioGroupProps['onChange'] = selectedValue => {
        console.log(selectedValue);
        this.setState({ selectedValue });
    }

    render() {
        return (
            <div>
                <RadioGroup name="radioGroup" onChange={this.handleChange} selectedValue={this.state.selectedValue}>
                    <Radio id="Option A" value="a" />
                    <Radio id="Option B" value={2} />
                    <Radio id="Option C" value={["hello"]} disabled />
                </RadioGroup>
            </div>
        );
    }
}
