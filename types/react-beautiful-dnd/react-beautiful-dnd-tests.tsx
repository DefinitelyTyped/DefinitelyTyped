import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DragDropContext, Draggable, Droppable, DropResult, DragStart, DragUpdate, HookProvided } from 'react-beautiful-dnd';

interface Item {
  id: string;
  content: string;
}

const getItems = (count: number): Item[] => {
  return Array
    .from({length: count}, (v, k) => k)
    .map(k => ({
      id: `item-${k}`,
      content: `item ${k}`
    }));
};

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: 'none',
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  width: 250
});

interface AppState {
  items: Item[];
}

class App extends React.Component<{}, AppState> {
  state = {
    items: getItems(10)
  };
  constructor(props: any) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart(dragStart: DragStart, provided: HookProvided) {
    //
  }

  onDragUpdate(dragUpdate: DragUpdate, provided: HookProvided) {
    //
  }

  onDragEnd(result: DropResult, provided: HookProvided) {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({items});
  }

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate} onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" ignoreContainerClipping={false}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        {item.content}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
