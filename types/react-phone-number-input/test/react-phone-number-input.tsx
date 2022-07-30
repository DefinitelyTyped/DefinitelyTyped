import * as React from 'react';
import PhoneInput, {
    CountrySelectComponentProps,
    getCountries,
    getCountryCallingCode,
    parsePhoneNumber,
    PhoneNumber,
} from 'react-phone-number-input';

const phoneNumber: PhoneNumber | undefined = parsePhoneNumber('+12025550112');
const phoneNumberWithOptions: PhoneNumber | undefined = parsePhoneNumber('2025550112', { defaultCountry: 'US' });
const phoneNumberWithCountryCode: PhoneNumber | undefined = parsePhoneNumber('2025550112', 'US');

const test1 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value: string) => {
            console.log(value);
        }}
        displayInitialValueAsLocalNumber={false}
        disabled={false}
        autoComplete="tel"
        defaultCountry="NZ"
        countries={['NZ', 'US', 'FR']}
        placeholder="Place holder"
        international={true}
        country={'US'}
        countrySelectProps={{ tabIndex: '-1' }}
        onBlur={(ev: React.FocusEvent<HTMLInputElement>) => {
            console.log(ev.currentTarget.value);
        }}
    >
        <div>panel 1</div>
        <div>panel 2</div>
        <div>panel 3</div>
    </PhoneInput>
);

const InputComponent = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
    <input ref={ref} {...props} />
));

const test2 = (
    <PhoneInput
        value={'+64271231234'}
        onChange={(value: string) => {
            console.log(value);
        }}
        addInternationalOption
        countryOptionsOrder={['US', 'CA', 'AU', '|', '...']}
        disabled
        inputComponent={InputComponent}
        numberInputProps={{ type: 'tel' }}
        smartCaret={false}
    />
);

const CountrySelect = ({ value, onChange, labels, ...rest }: CountrySelectComponentProps) => (
    <select
        {...rest}
        value={value}
        onChange={event => {
            if (onChange) {
                onChange(event.target.value || undefined);
            }
        }}
    >
        {getCountries().map((country: string) => (
            <option key={country} value={country}>
                {labels ? labels[country] : country} +{getCountryCallingCode(country)}
            </option>
        ))}
    </select>
);

CountrySelect.defaultProps = {
    labels: {
        AU: 'Australie',
        CA: 'Canada',
        US: "États-Unis d'Amérique",
    },
};

const test3 = (
    <PhoneInput
        initialValueFormat={'national'}
        value={'+64271231234'}
        onChange={(value: string) => {
            console.log(value);
        }}
        countrySelectComponent={CountrySelect}
        addInternationalOption
        countries={['AU', 'CA', 'US']}
        disabled
        inputComponent={InputComponent}
        numberInputProps={{ type: 'tel' }}
        smartCaret={false}
        flagComponent={(props: { country: string; flagUrl: string }) => (
            <span>
                country: {props.country}, flagUrl: {props.flagUrl}
            </span>
        )}
    />
);

const test4 = (
    <PhoneInput
        value="+12345678901"
        onChange={(value: string) => {
            console.log(value);
        }}
        international
        countryCallingCodeEditable={false}
        focusInputOnCountrySelection={true}
    />
);
