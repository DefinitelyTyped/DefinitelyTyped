import * as React from 'react';
import { Text } from 'react-native';
import {
    MKButton,
    MKColor,
    MKTextField,
    MKSwitch,
    MKIconToggle,
    MKProgress,
    MKSlider,
    MKRangeSlider,
    MKSpinner,
    MKRadioButton,
    MKCheckbox,
    setTheme
} from 'react-native-material-kit';

//// BUTTON

const ButtonTest = () =>
    <MKButton
        style={{ backgroundColor: MKColor.Amber }}
        onPress={() => console.log('hi, raised button!')}
    >
        <Text style={{color: 'white', fontWeight: 'bold'}}>
            RAISED BUTTON
        </Text>
    </MKButton>;

const ButtonBuilderTest = new MKButton.Builder()
  .withBackgroundColor(MKColor.Teal)
  .build();

//// TEXT FIELD

interface MKTextFieldTestState {
    value: string;
}

class MKTextFieldTest extends React.Component<any, MKTextFieldTestState> {
    state = {
        value: ''
    };

    render() {
        return (
            <MKTextField
              tintColor={MKColor.Lime}
              textInputStyle={{color: MKColor.Orange}}
              placeholder="Text"
              value={this.state.value}
              onTextChange={a => this.setState({value: a})}
            />
        );
    }
}

//// SWITCH

const MKSwitchTest = () =>
    <MKSwitch
        onColor="rgba(255,152,0,.3)"
        thumbOnColor={MKColor.Orange}
        rippleColor="rgba(255,152,0,.2)"
        onPress={() => console.log('orange switch pressed')}
        onCheckedChange={checked =>
            console.log('orange switch checked', checked)}
    />;

//// ICON TOGGLE

const MKIconToggleTest = () =>
    <MKIconToggle
        checked={true}
        onCheckedChange={checked =>
            console.log('orange switch checked', checked)}
        onPress={() => console.log('pressed')}
    >
        <Text>Off</Text>
        <Text>On</Text>
    </MKIconToggle>;

//// PROGRESS
const MKProgressTest = () => <MKProgress progress={0.2} />;
const MKIndeterminateProgressTest = () => <MKProgress.Indeterminate />;

//// SLIDER
interface MKSliderTestState {
    curValue: number;
}

class MKSliderTest extends React.Component<null, MKSliderTestState> {
    state = {
        curValue: 3
    };

    render() {
        return (
            <MKSlider
                min={10}
                max={100}
                onChange={curValue => this.setState({curValue})}
            />
        );
    }
}

//// RANGE SLIDER
interface MKRangeSliderTestState {
    min: number;
    max: number;
}

class MKRangeSliderTest extends React.Component<null, MKRangeSliderTestState> {
    state = {
        min: 0,
        max: 2
    };

    render() {
        return (
            <MKRangeSlider
                min={10}
                max={100}
                minValue={30}
                maxValue={50}
                onChange={(curValue) => this.setState({
                    min: curValue.min,
                    max: curValue.max,
                })}
                onConfirm={(curValue) => {
                    console.log("Slider drag ended");
                    console.log(curValue);
                }}
            />
        );
    }
}

/// Spinner Test
const MKSpinnerTest = () => <MKSpinner />;

/// Radio Button
class MKRadioButtonTest extends React.Component<null, null> {
    radioGroup: MKRadioButton.Group;

    constructor() {
        super(null);
        this.radioGroup = new MKRadioButton.Group();

        setTheme({radioStyle: {
            fillColor: `rgba(${MKColor.RGBTeal},.8)`,
            borderOnColor: `rgba(${MKColor.RGBTeal},.6)`,
            borderOffColor: `rgba(${MKColor.RGBTeal},.3)`,
            rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
        }});
    }

    render() {
        return (
            <MKRadioButton
                checked={true}
                group={this.radioGroup}
            />
        );
    }
}

/// Checkbox
class MKCheckboxTest extends React.Component<null, null> {
    constructor() {
        super(null);

        setTheme({checkboxStyle: {
            fillColor: MKColor.Teal,
            borderOnColor: MKColor.Teal,
            borderOffColor: MKColor.Teal,
            rippleColor: `rgba(${MKColor.RGBTeal},.15)`,
        }});
    }

    render() {
        return (
            <MKCheckbox checked={true} />
        );
    }
}
