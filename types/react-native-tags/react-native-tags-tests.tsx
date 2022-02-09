// // Tests taken from Usage at https://github.com/peterp/react-native-tags#usage

import * as React from 'react';
import Tags from 'react-native-tags';
import { TouchableOpacity, Text } from 'react-native';

class GeneralStarExample extends React.Component {
    render() {
        return (
            <Tags
                initialText="monkey"
                textInputProps={{
                    placeholder: 'Any type of animal',
                }}
                initialTags={['dog', 'cat', 'chicken']}
                onChangeTags={tags => console.log(tags)}
                onTagPress={(index, tagLabel, event, deleted) =>
                    console.log(index, tagLabel, event, deleted ? 'deleted' : 'not deleted')
                }
                containerStyle={{ justifyContent: 'center' }}
                inputStyle={{ backgroundColor: 'white' }}
                renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                    <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
                        <Text>{tag}</Text>
                    </TouchableOpacity>
                )}
            />
        );
    }
}

export default GeneralStarExample;
