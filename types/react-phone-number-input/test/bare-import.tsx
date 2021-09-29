import * as React from 'react';
import PhoneInput from 'react-phone-number-input/input';

const test1 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value?: string) => {
            console.log(value);
        }}
        disabled={false}
        autoComplete="tel"
        defaultCountry="NZ"
        placeholder="Place holder"
        international={true}
        country={'US'}
        onBlur={(ev: React.FocusEvent<HTMLInputElement>) => {
            console.log(ev.currentTarget.value);
        }}
    />
);

const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <input ref={ref} {...props} />
));

const test2 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value?: string) => {
            console.log(value);
        }}
        disabled
        inputComponent={InputComponent}
        smartCaret={false}
        useNationalFormatForDefaultCountryValue={false}
    />
);
