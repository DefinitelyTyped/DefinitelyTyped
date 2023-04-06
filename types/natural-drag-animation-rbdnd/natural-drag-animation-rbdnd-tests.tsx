import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DragDropContext, Droppable, Draggable, DropResult, DraggableLocation } from 'react-beautiful-dnd';
import NaturalDragAnimation from 'natural-drag-animation-rbdnd';

interface listItemType {
    id: string;
    content: string;
}
// fake data generator
const getItems = (count: number, offset = 0): listItemType[] => Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k + offset}`,
  content: `item ${k + offset}`,
}));

// a little function to help us with reordering the result
const reorder = (list: listItemType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source: listItemType[], destination: listItemType[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: {
    [key: string]: listItemType[]
  } = {};

  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class List extends React.Component<{}, {items: listItemType[], selected: listItemType[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: getItems(10),
            selected: getItems(5, 10),
          };
    }

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
    id2List = {
      droppable: 'items',
      droppable2: 'selected',
    };

    // getList = (id:string) => this.state[this.id2List[id]];
    getList = (id: string) => id === 'droppable' ? this.state.items : this.state.selected;

    onDragEnd = (res: DropResult) => {
      const { source, destination } = res;

      // dropped outside the list
      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const items = reorder(
          this.getList(source.droppableId),
          source.index,
          destination.index,
        );

        const state = { items };

        if (source.droppableId === 'droppable2') {
          this.setState({selected: items});
        }

        this.setState(state);
      } else {
        const result = move(
          this.getList(source.droppableId),
          this.getList(destination.droppableId),
          source,
          destination,
        );

        this.setState({
          items: result.droppable,
          selected: result.droppable2,
        });
      }
    }

    render() {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '600px',
        }}
        >
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Column droppableId="droppable" data={this.state.items} {...this.props} />
            <Column droppableId="droppable2" data={this.state.selected} {...this.props} />
          </DragDropContext>
        </div>
      );
    }
}

ReactDOM.render(<List />, document.getElementById('root'));

const grid = 8;

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

class Column extends React.Component<{data: listItemType[], droppableId: string}> {
    // static propTypes = {
    //   droppableId: PropTypes.string.isRequired,
    //   data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    // };

    render() {
      const { droppableId, data, ...props } = this.props;

      return (
        <Droppable droppableId={droppableId}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.props.data.map((item, index) => (
                <Item item={item} index={index} key={item.id} {...props} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      );
    }
}

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

class Item extends React.Component<{item: listItemType, index: number}> {
  render() {
    const { item, index, ...props } = this.props;

    return (
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
      >
        {(provided, snapshot) => (
          <NaturalDragAnimation
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style,
            )}
            snapshot={snapshot}
            {...props}
          >
            {(style: React.CSSProperties) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={style}
              >
                {item.content}
              </div>
            )}
          </NaturalDragAnimation>
        )}
      </Draggable>
    );
  }
}
