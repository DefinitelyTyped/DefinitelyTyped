import * as React from 'react';

import { DatePicker, Picker } from 'react-native-wheel-pick';

import { Platform } from 'react-native';

const PickerComponent = () => {
    const isIos = Platform.OS === 'ios';
    return (
        <>
            <Picker
                style={{ backgroundColor: 'white', width: 300, height: 215 }}
                selectedValue="item4"
                pickerData={['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7']}
                onValueChange={value => {}}
            />
            <DatePicker
                style={{ height: 215, width: isIos ? 300 : undefined }}
                date={new Date('2018-06-27')}
                onDateChange={date => {}}
            />
        </>
    );
};

export default PickerComponent;
