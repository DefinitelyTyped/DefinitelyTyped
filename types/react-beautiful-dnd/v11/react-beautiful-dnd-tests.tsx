import * as React from 'react';
import {
    BeforeCapture,
    DragDropContext,
    Draggable,
    DragStart,
    DragUpdate,
    Droppable,
    DroppableStateSnapshot,
    DropResult,
    resetServerContext,
    ResponderProvided,
} from 'react-beautiful-dnd';
import * as ReactDOM from 'react-dom';

interface Item {
    id: string;
    content: string;
}

const getItems = (count: number): Item[] => {
    return Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`,
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
    ...draggableStyle,
});

const getListStyle = (snapshot: DroppableStateSnapshot) => ({
    background: snapshot.draggingFromThisWith ? 'lightpink' : snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
    width: 250,
});

interface AppState {
    items: Item[];
}

class App extends React.Component<{}, AppState> {
    state = {
        items: getItems(10),
    };
    constructor(props: any) {
        super(props);
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onBeforeCapture(beforeCapture: BeforeCapture) {
        //
    }

    onBeforeDragStart(dragStart: DragStart) {
        //
    }

    onDragStart(dragStart: DragStart, provided: ResponderProvided) {
        //
    }

    onDragUpdate(dragUpdate: DragUpdate, provided: ResponderProvided) {
        //
    }

    onDragEnd(result: DropResult, provided: ResponderProvided) {
        if (result.combine) {
            // super simple: just removing the dragging item
            const items: Item[] = [...this.state.items];
            items.splice(result.source.index, 1);
            this.setState({ items });
            return;
        }

        if (!result.destination) {
            return;
        }

        const items = reorder(this.state.items, result.source.index, result.destination.index);

        this.setState({ items });
    }

    render() {
        return (
            <DragDropContext
                onBeforeCapture={this.onBeforeCapture}
                onBeforeDragStart={this.onBeforeDragStart}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable" ignoreContainerClipping={false} isCombineEnabled={true}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} style={getListStyle(snapshot)} {...provided.droppableProps}>
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index} shouldRespectForcePress>
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

resetServerContext();
