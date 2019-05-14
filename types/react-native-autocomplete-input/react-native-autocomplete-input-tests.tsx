import Autocomplete from 'react-native-autocomplete-input';
import * as React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

interface Item { query: string; value: string; }

class AutocompleteExample extends React.Component<{}, {query: string}> {
    state = {
        query: ''
    };

    filterData(query: string): Item[] {
        return [{query: '', value: 'here i am'}];
    }

    render() {
        const { query } = this.state;
        const data = this.filterData(query);
        return (<Autocomplete
            data={data}
            defaultValue={query}
            flatListProps={{ onScroll: () => {} }}
            keyExtractor={item => item.value}
            onChangeText={text => this.setState({ query: text })}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.setState({ query: item.query })}>
                    <Text>{item.value}</Text>
                </TouchableOpacity>
            )}
        />);
    }
}
