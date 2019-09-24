import * as React from 'react';
import { View, NativeSyntheticEvent } from 'react-native';
import { PaymentCardTextField, PaymentCardTextFieldNativeEvent } from '..';

export const PaymentCardTextFieldConsumer: React.FC = () => {
    const handleFieldParamsChange = React.useCallback(
        (valid: boolean, params: PaymentCardTextFieldNativeEvent['params']) => {
            console.log({ valid, params });
        },
        [],
    );

    const handleChange = React.useCallback((event: NativeSyntheticEvent<PaymentCardTextFieldNativeEvent>) => {
        console.log({ event });
    }, []);

    return (
        <View>
            <PaymentCardTextField
                onParamsChange={handleFieldParamsChange}
                onChange={handleChange}
                cvcPlaceholder="***"
                numberPlaceholder="**** **** **** ****"
                expirationPlaceholder="**/**"
                keyboardAppearance="light"
                style={{
                    borderRadius: 5,
                    borderColor: '#111',
                    borderWidth: 1,
                }}
            />
        </View>
    );
};
