import Autocomplete from 'react-native-autocomplete-input';
import * as React from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';

interface Item {
    id: string;
    value: string;
}
const data: Item[] = [
    { id: '0', value: 'test' },
    { id: '1', value: 'value' },
    { id: '2', value: 'prop' },
];

const AutocompleteExample: React.FC = () => {
    const [value, setValue] = React.useState('');
    return (
        <Autocomplete
            containerStyle={{ backgroundColor: '#fff' }}
            hideResults={false}
            data={data.filter(d => d.value.toLowerCase().includes(value.toLowerCase()))}
            value={value}
            inputContainerStyle={{ backgroundColor: '#fff' }}
            listContainerStyle={{ backgroundColor: '#fff' }}
            listStyle={{ backgroundColor: '#fff' }}
            onShowResults={showResults => null}
            onStartShouldSetResponderCapture={event => false}
            renderTextInput={props => <TextInput {...props} />}
            flatListProps={{
                keyExtractor: item => item.id,
                renderItem: ({ item }) => (
                    <TouchableOpacity onPress={() => setValue(item.value)}>
                        <Text>{item.value}</Text>
                    </TouchableOpacity>
                ),
            }}
            onChangeText={setValue}
        />
    );
};

// renderResultList is tested in separate component because
// using renderResultList overrides flatListProps so you
// should never use both props together
const AutocompleteCustomResultList: React.FC = () => {
    return (
        <Autocomplete
            data={data}
            renderResultList={({ data, style }) => (
                <View style={style}>
                    {data.map((item, index) => (
                        <Text key={index}>{item}</Text>
                    ))}
                </View>
            )}
        />
    );
};
