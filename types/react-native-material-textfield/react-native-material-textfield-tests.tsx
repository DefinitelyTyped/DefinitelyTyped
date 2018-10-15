import * as React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const Example = () => (
    <View>
        <TextField
            label="Example"
            multiline
            placeholder="Text when field is empty"
            value="Initial value"
            style={{ fontSize: 10 }}
        />
    </View>
);
