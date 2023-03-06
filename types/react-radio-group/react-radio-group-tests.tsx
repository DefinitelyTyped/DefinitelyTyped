import * as React from 'react';
import { Radio, RadioGroup } from "react-radio-group";

const DefaultComponent: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, ...rest }) => {
    return (
        <div style={{ display: 'flex' }} {...rest}>
            {children}
        </div>
    );
};

interface ReactRadioGroupState {
    selectedValueA: any;
    selectedValueB: any;
}

class ReactRadioGroup extends React.Component<RadioGroup.RadioGroupProps, ReactRadioGroupState> {
    state = {
        selectedValueA: 2,
        selectedValueB: true,
    };

    handleChange = (key: keyof ReactRadioGroupState) => (value: any) => {
        console.log(key, value);
        this.setState(state => {
            return {
                ...state,
                [key]: value,
            };
        });
    }

    render() {
        return (
            <div>
                <RadioGroup
                    name="radioGroupA"
                    onChange={this.handleChange('selectedValueA')}
                    selectedValue={this.state.selectedValueA}
                    Component={DefaultComponent}
                    className="here-is-a-classname"
                >
                    <Radio id="Option A" value="a" />
                    <Radio id="Option B" value={2} />
                    <Radio id="Option C" value={["hello"]} disabled />
                </RadioGroup>
                <RadioGroup
                    name="radioGroupB"
                    onChange={this.handleChange('selectedValueB')}
                    selectedValue={this.state.selectedValueB}
                    Component="span"
                    style={{marginBottom: '10px'}}
                >
                    <Radio id="Option D" value={true} />
                    <Radio id="Option E" value={null} />
                    <Radio id="Option F" value={undefined} />
                    <Radio id="Option G" value={{name: 'Mark'}} disabled />
                </RadioGroup>
            </div>
        );
    }
}
