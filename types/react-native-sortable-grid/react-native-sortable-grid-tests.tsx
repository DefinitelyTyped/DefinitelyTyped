import * as React from 'react';
import SortableGrid from 'react-native-sortable-grid';
import { View, Text } from 'react-native';

export default class SortableGridExample extends React.Component {
    render() {
        const items = ['A', 'B', 'C', 'D'];

        return (
            <SortableGrid
                blockTransitionDuration={400}
                itemsPerRow={4}
                onDragRelease={order => console.log(order)}
            >
                {items.map((letter, index) => (
                    <View key={index}>
                        <Text>{letter}</Text>
                    </View>
                ))}
            </SortableGrid>
        );
    }
}
