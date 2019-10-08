import * as React from 'react';
import { Text } from 'react-native';
import ReactNativePhoneInput from 'react-native-phone-input';

const test: React.SFC = () => (
    <ReactNativePhoneInput<typeof Text>
        initialCountry={'us'}
        allowZeroAfterCountryCode={false}
        disabled={false}
        value={'+440000000000'}
        style={{
            backgroundColor: 'green',
        }}
        flagStyle={{
            backgroundColor: 'blue',
        }}
        textStyle={{
            color: 'red',
        }}
        textProps={{
            maxFontSizeMultiplier: 2,
        }}
        textComponent={Text}
        offset={10}
        pickerButtonColor={'#FFFFFF'}
        pickerBackgroundColor={'#000000'}
        pickerItemStyle={{}}
        cancelText={'Cancel'}
        confirmText={'Confirm'}
        buttonTextStyle={{
            color: 'red',
        }}
        onChangePhoneNumber={newPhoneNumber => {
            console.info('New phone number', newPhoneNumber);
        }}
        onSelectCountry={selected => {
            console.info('Selected country', selected);
        }}
        onPressFlag={() => {
            console.info('Flag pressed');
        }}
        onPressCancel={() => {
            console.info('Selection cancelled');
        }}
        onPressConfirm={() => {
            console.info('Selection confirmed');
        }}
        countriesList={[]}
    />
);
