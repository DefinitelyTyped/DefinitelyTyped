import * as React from 'react';
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
    DraggableProvided,
    DraggableStateSnapshot,
    DroppableProvided,
    DroppableStateSnapshot,
} from 'react-beautiful-dnd';

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

const getItemStyle = (draggableStyle: any, isDragging: any) => ({
    userSelect: 'none',
    background: isDragging ? 'lightgreen' : 'grey',
    ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    width: 250,
});

interface AppState {
    items: Item[];
}

export default class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            items: getItems(10),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result: DropResult) {
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({ items });
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(
                        provided: DroppableProvided,
                        snapshot: DroppableStateSnapshot
                    ) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {this.state.items.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                >
                                    {// tslint:disable-next-line:no-shadowed-variable
                                    (
                                        provided: DraggableProvided,
                                        snapshot: DraggableStateSnapshot
                                    ) => (
                                        <div>
                                            <div
                                                ref={provided.innerRef}
                                                style={getItemStyle(
                                                    provided.draggableProps
                                                        .style,
                                                    snapshot.isDragging
                                                )}
                                                {...provided.dragHandleProps}
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
