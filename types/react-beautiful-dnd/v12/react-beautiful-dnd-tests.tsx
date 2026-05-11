import * as React from "react";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    DraggableRubric,
    DraggableStateSnapshot,
    DragStart,
    DragUpdate,
    Droppable,
    DroppableStateSnapshot,
    DropResult,
    resetServerContext,
    ResponderProvided,
} from "react-beautiful-dnd";

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

const getListStyle = (snapshot: DroppableStateSnapshot) => ({
    background: snapshot.draggingFromThisWith ? "lightpink" : snapshot.isDraggingOver ? "lightblue" : "lightgrey",
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
        this.renderItem = this.renderItem.bind(this);
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

    renderItem(provided: DraggableProvided, snapshot: DraggableStateSnapshot, rubric: DraggableRubric) {
        const { innerRef, draggableProps, dragHandleProps } = provided;
        const item = this.state.items[rubric.source.index];
        return (
            <div>
                <div
                    ref={innerRef}
                    {...draggableProps}
                    {...dragHandleProps}
                    style={{
                        ...draggableProps.style,
                        userSelect: "none",
                        background: snapshot.isDragging ? "lightgreen" : "grey",
                        boxShadow: snapshot.isClone ? "inset 0px 0px 0px 2px blue" : "none",
                    }}
                >
                    {item.content}
                </div>
            </div>
        );
    }

    render() {
        return (
            <DragDropContext
                onBeforeDragStart={this.onBeforeDragStart}
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
                liftInstruction="Some instruction"
            >
                <Droppable
                    droppableId="droppable"
                    ignoreContainerClipping={false}
                    isCombineEnabled={true}
                    renderClone={this.renderItem}
                    getContainerForClone={() => document.body}
                >
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} style={getListStyle(snapshot)} {...provided.droppableProps}>
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index} shouldRespectForcePress>
                                    {this.renderItem}
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

<App />;

resetServerContext();
