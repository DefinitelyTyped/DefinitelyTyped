import * as React from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const data = [
    { label: 'Label1', value: 0 },
    { label: 'Label2', value: 1 },
    { label: 'Label3', value: 2 },
    { label: 'Label4', value: 3 },
];

class Example extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RadioForm radio_props={data} initial={0} onPress={value => console.log(value)} />

                <RadioForm formHorizontal={false} animation={true}>
                    {data.map((obj, i) => (
                        <RadioButton labelHorizontal={true} key={i}>
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={true}
                                onPress={value => console.log(value)}
                                buttonInnerColor={'#e74c3c'}
                                buttonOuterColor={'#2196f3'}
                                buttonSize={40}
                                buttonOuterSize={80}
                                buttonStyle={{}}
                                buttonWrapStyle={{ marginLeft: 10 }}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={value => console.log(value)}
                                labelStyle={{ fontSize: 20, color: '#2ecc71' }}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    ))}
                </RadioForm>
            </React.Fragment>
        );
    }
}
