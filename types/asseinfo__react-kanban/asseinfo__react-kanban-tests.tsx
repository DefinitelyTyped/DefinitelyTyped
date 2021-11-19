import * as React from 'react';
import Board, {
    Card,
    Column,
    BoardInterface,
    CardComponent,
    ColumnAdderComponent,
    ColumnHeaderComponent,
    addColumn,
    moveColumn,
    removeColumn,
    addCard,
} from '@asseinfo/react-kanban';

const initBoard: BoardInterface = {
    columns: [
        {
            id: 1,
            title: 'Todo',
            cards: [
                {
                    id: 1,
                    title: 'Add card',
                    description: '',
                },
            ],
        },
        {
            id: 2,
            title: 'Doing',
            cards: [
                {
                    id: 2,
                    title: 'Drag-n-drop support',
                    description: '',
                },
            ],
        },
    ],
};

const card: Card = { id: 1, title: 'Card', description: 'A Card' };
const col: Column = { id: 1, title: 'Column', cards: [card] };

const CardComponent: CardComponent = ({ card, cardBag }) => {
    const { removeCard } = cardBag;
    return (
        <div>
            <h5>{card.title}</h5>
            <button onClick={() => removeCard()}>Remove Card</button>
            <p>{card.description}</p>
        </div>
    );
};

// Controlled board example
function ReactKanban() {
    const [board, setBoard] = React.useState(initBoard);

    React.useEffect(() => {
        setBoard(moveColumn(initBoard, { fromPosition: 0, fromColumnId: 1 }, { toPosition: 1, toColumnId: 2 }));
    }, []);

    const ColumnHeader: ColumnHeaderComponent = ({ column }) => {
        return (
            <div>
                {column.title}
                <button onClick={() => removeColumn(board, column)}>Remove Column</button>
                <button onClick={() => setBoard(addCard(board, column, { id: 99, title: 'New Card' }, { on: 'top' }))}>
                    Add Card
                </button>
            </div>
        );
    };

    const ColumnAdder: ColumnAdderComponent = () => {
        return (
            <button
                onClick={() => {
                    setBoard(addColumn(board, { id: 4, title: 'Title', cards: [] }));
                }}
            >
                Add column
            </button>
        );
    };

    return (
        <Board
            children={board}
            allowAddColumn
            allowRemoveColumn
            allowRemoveCard
            disableCardDrag
            // disableColumnDrag
            onColumnRename={(board, column) => {}}
            onColumnRemove={(board, column) => {}}
            renderCard={(card, cardBag) => <CardComponent card={card} cardBag={cardBag} />}
            renderColumnHeader={(column, columnBag) => <ColumnHeader column={column} columnBag={columnBag} />}
            renderColumnAdder={() => <ColumnAdder />}
            onColumnDragEnd={(column, fromObj, toObj) => {
                setBoard(moveColumn(board, fromObj, toObj));
            }}
        />
    );
}
