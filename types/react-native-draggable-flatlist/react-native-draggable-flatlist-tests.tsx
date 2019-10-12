import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DraggableFlatList, { RenderItemInfo } from 'react-native-draggable-flatlist';

interface Item {
  name: string;
  mail: string;
}

class Example extends React.Component {
  state = {
    data: [
      { name: 'Esteban', mail: 'foo@foo.com' },
      { name: 'Xavier', mail: 'foo2@foo.com' },
    ]
  };

  renderItem({ item, index, move, moveEnd, isActive }: RenderItemInfo<Item>) {
    return (
      <TouchableOpacity
        onLongPress={move}
        onPressOut={moveEnd}
      >
        <Text>{index}</Text>
        <Text>{item.name}</Text>
        <Text>{item.mail}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { data } = this.state;
    return (
      <DraggableFlatList
        data={data}
        renderItem={this.renderItem}
        keyExtractor={(_item, index) => `draggable-item-${index}`}
        scrollPercent={10}
        onMoveEnd={({ data }) => this.setState({ data })}
        ListFooterComponent={<Text>{'Hello'}</Text>}
      />
    );
  }
}
