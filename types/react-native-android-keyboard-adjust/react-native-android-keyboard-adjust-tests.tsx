import * as React from 'react';
import { Text, TextInput, View, Platform } from 'react-native';
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

const IS_ANDROID = Platform.OS === 'android';

const Example = () => {
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        if (IS_ANDROID) {
            AndroidKeyboardAdjust.setAdjustPan();
        }

        return () => {
            if (IS_ANDROID) {
                AndroidKeyboardAdjust.setAdjustResize();
            }
        };
    });

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder='Type here to translate!'
                onChangeText={setText}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    );
};

export default Example;
