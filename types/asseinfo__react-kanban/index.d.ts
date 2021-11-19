// Type definitions for: @asseinfo/react-kanban 2.2.0 <https://www.npmjs.com/package/@asseinfo/react-kanban>
// Project: https://github.com/bugraaydin1/types-asseinfo-react-kanban#readme
// Definitions by: Ahmet Buğra Aydın <https://github.com/bugraaydin1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4.4

import * as React from 'react';

export interface BoardInterface {
    columns: Column[];
}

export interface Column {
    id: number;
    title: string;
    cards: Card[];
}

export interface Card {
    id: number;
    title: string;
    column?: string;
    description?: string;
}

export interface CardProps {
    card: Card;
    cardBag: CardBag;
}
export type CardComponent = (props: CardProps) => JSX.Element;

export type ColumnAdderComponent = (props: AddColumnBag | any) => JSX.Element;

interface ColumnHeaderProps {
    column: Column;
    columnBag: ColumnBag;
}
export type ColumnHeaderComponent = (props: ColumnHeaderProps) => JSX.Element;

export type AddColumn = (board: BoardInterface, column: Column) => void | BoardInterface;

export interface AddColumnBag {
    addColumn: (board: BoardInterface, column: Column) => void | BoardInterface;
}

export interface ColumnBag {
    /** Only avilable in controlled board */
    removeColumn: (column: Column) => void;
    /** Only avilable in controlled board */
    renameColumn: (title: string, column?: Column) => void;
    /** Only avilable in controlled board */
    addCard: (card: Card, position?: { on: 'top' | 'bottom' }) => void | BoardInterface;
}

export interface CardBag {
    /** Not available on controlled board */
    removeCard: typeof RemoveCardFn;
    dragging?: boolean;
}

export function RemoveCardFn(): void;
export function RemoveCardFn(board: BoardInterface, fromColumn: Column, card: Card): void;

export interface ColumnSource {
    fromColumnId: number;
    fromPosition: number;
}

export interface ColumnDestination {
    toColumnId: number;
    toPosition: number;
}

export interface CardSource {
    fromColumnId: number;
    fromPosition: number;
}

export interface CardDestination {
    toColumnId: number;
    toPosition: number;
}

interface ColumnDragEndControlled {
    column: Column;
    fromObj: { fromPosition: number };
    toObj: { toPosition: number };
}

interface ColumnDragEndUncontrolled {
    board: BoardInterface;
    column: Column;
    fromObj: { fromPosition: number };
    toObj: { toPosition: number };
}

// controlled board
declare function OnColumnDragEndType(
    column: Column,
    fromObj: { fromPosition: number },
    toObj: { toPosition: number },
): void;
// uncontrolled board
declare function OnColumnDragEndType(
    board: BoardInterface,
    column: Column,
    fromObj: { fromPosition: number },
    toObj: { toPosition: number },
): void;

// controlled board
declare function OnColumnRenameType(board: BoardInterface, title: string): void;
// uncontrolled board
declare function OnColumnRenameType(board: BoardInterface, column: Column): void;

export interface BoardProps {
    /**
     * Required if controlled
     */
    children?: BoardInterface;
    /**
     * * required if uncontrolled
     */
    initialBoard?: BoardInterface;
    /**
     * Callback when the card move ends
     */
    onCardDragEnd?: (card: Card, source: ColumnSource, destination: ColumnDestination) => void;
    /**
     *
     * Callback when the column move ends
     * #### Controlled board:
     * ```javascript
     * 	<Board
     *			children={board}
     *			onColumnDragEnd={(column, fromObj, toObj) => {
     *				setBoard(moveColumn(board, fromObj, toObj));
     *			}}
     *		/>
     * ```
     * #### Uncontrolled board:
     * ```javascript
     * 	<Board
     *			children={board}
     *			onColumnDragEnd={(board, column, fromObj, toObj) => {
     *				console.log(board, column, fromObj, toObj);
     *			}}
     *		/>
     * ```
     */
    onColumnDragEnd?: (...OnColumnDragEndType: any) => void;
    /**
     * A card to be rendered instead of the default card
     * * It's unavailable when the board is controlled.
     * #### Example:
     * ```javascript
     *const CardComponent: CardComponent = ({card,cardBag}) => {
     *				const { removeCard } = cardBag;
     *				return (
     *					<div>
     *						<h5>{card.title}</h5>
     *						<button onClick={() => removeCard()}>
     *							Remove Card
     *						</button>
     *						<p>{card.description}</p>
     *					</div>
     *				);
     *		};
     *				<Board
     *					renderCard={(card, bag) => (
     *						<CardComponent card={card} cardBag={bag} />
     *					)}
     *				/>
     *	```
     */
    renderCard?: (card: Card, cardBag: { removeCard: typeof RemoveCardFn; dragging: boolean }) => JSX.Element;
    /**
     * A column header to be rendered instead of the default column header
     */
    renderColumnHeader?: (column: Column, columnBag: ColumnBag) => JSX.Element;
    /**
     * Allow a new column be added by the user
     */
    allowAddColumn?: boolean;
    /**
     * When a new column is confirmed by the user through the default column adder template
     * * If your board is uncontrolled you must return the new column with its new id in this callback.
     * * required if use the default column adder template
     * #### Example:
     *    ```javascript
     *    const onColumnNew = (newColumn) => {
     *      newColumn = {...newColumn, id: uniqueColumnId }
     *      return newColumn
     *    }
     *
     *    <Board initialBoard={board} allowAddColumn onColumnNew={onColumnNew} />
     *    ```
     */
    onNewColumnConfirm?: (newColumn: Column) => Column | undefined;
    /**
     * * Required callback when `allowAddColumn` is true or `addColumn` is called
     * * This callback will not be called in an uncontrolled board
     */
    onColumnNew?: () => void;
    /**
     * Column adder to be rendered instead of the default column adder template
     * #### Example:
     * ```javascript
     *	const ColumnAdder: ColumnAdderComponent = ({ addColumn }) => {
     *		return (
     *			<div
     *				onClick={() =>
     *					addColumn({ id: uniqueColumnId, title: "Title", cards:[]})
     *				}
     *			>
     *				Add column
     *			</div>
     *		);
     *	};
     *		<Board
     *			allowAddColumn
     *			renderColumnAdder={({ addColumn }) => (
     *				<ColumnAdder addColumn={addColumn} />
     *			)}
     *		>
     *			{board}
     *		</Board>
     * ```
     */
    renderColumnAdder?: (columnBag: AddColumnBag) => JSX.Element;
    /**
     * Disable the column move
     */
    disableColumnDrag?: boolean;
    /**
     * Disable the card move
     */
    disableCardDrag?: boolean;
    /**
     * Allow to remove a column when using default column header
     */
    allowRemoveColumn?: boolean;
    /**
     * Callback when a column is removed
     * * Required if `allowRemoveColumn` is true or removeColumn is called
     *
     * ```javascript
     * // controlled:
     * 	<Board
     * 		 children={board}
     *	   	 allowRemoveColumn
     *			onColumnRemove={(column) => {
     *				console.log(column);
     *			}}
     *		 />
     *  // uncontrolled:
     * 	<Board
     * 		 initialBoard={board}
     *	   	 allowRemoveColumn
     *			onColumnRemove={(board, column) => {
     *				console.log(board, column);
     *			}}
     *		 />
     *	```
     */
    onColumnRemove?: (board?: BoardInterface, column?: Column) => void;
    /**
     *  Allow to rename a column in default column header
     */
    allowRenameColumn?: boolean;
    /**
     * Callback when a column is renamed
     * * Required if `allowRenameColumn` is true or renameColumn is called
     *
     * ```javascript
     * // controlled:
     * 	<Board
     *			children={board}
     *			allowAddColumn
     *			allowRemoveCard
     *			allowRenameColumn
     *			onColumnRename={(board, column) => {
     *				console.log(board, column);
     *			}}
     *		/>
     * // uncontrolled:
     * 	<Board
     * 			initialBoard={board}
     * 			allowRenameColumn
     *			onColumnRename={(board, column) => {
     *				console.log(board, column);
     *			}}
     *		/>
     *	```
     */
    onColumnRename?: (...OnColumnRenameType: any) => void; //column,title in controlled
    /**
     *  Allow to remove a card in default card template
     */
    allowRemoveCard?: boolean;
    /**
     * Callback when a card is removed
     * * Required if `allowRemoveCard` is true
     */
    onCardRemove?: (board?: BoardInterface, column?: Column) => void;
    /**
     *  Allow to add a card. Expect an object with the direction to add into column.
     * * Use in uncontrolled board
     * ```javascript
     * 	<Board allowAddCard={{ on: 'bottom' }}
     * 	```
     */
    allowAddCard?: { on: 'top' | 'bottom' };
    /**
     * Callback when a new card is added through the default card adder template
     * * Use in uncontrolled board
     * * Required if `allowAddCard` is true or addCard is called
     */
    onCardNew?: (board?: BoardInterface, column?: Column) => void;
    /**
     * Callback when a new card is confirmed through the default card adder template
     * * Use in uncontrolled board
     * * Required if `allowAddCard` is true
     * #### Example:
     * ```javascript
     * function onCardNew (newCard) {
     *	  newCard = { ...newCard, id: uniqueCardId }
     * 	  return newCard;
     * }
     *	<Board allowAddCard={true} initialBoard={board} onNewCardConfirm={onCardNew} onCardNew={console.log} />
     * ```
     */
    onNewCardConfirm?: (card: Card) => Card;
}

/**
 * * ## Helper Functions
 * */

/**
 * Helper: Add a column. Expects a unique `id`
 */
export declare function addColumn(board: BoardInterface, column: Column): BoardInterface;
/**
 * On `renderColumnAdder` use this instead.
 */
export declare function addColumn(column: Column): void;

/**
 * Helper: Remove the given column
 */
export declare function removeColumn(board: BoardInterface, column: Column): BoardInterface;
/**
 * Helper: Rename the given column
 * * Optionally pass an object to be merged with the column properties.
 * You can add new props and/or change the existing ones
 */
export declare function changeColumn(
    board: BoardInterface,
    column: Column,
    object: { [key: string]: string | number | Card[] },
): void;
/**
 * Helper: `from` and `to` objects are the same ones passed to `onCardDragEnd` callback.
 * * Use with `onCardDragEnd` callback to update state with new board returned.
 * * Use this on a controlled board.
 */
export declare function moveColumn(
    board: BoardInterface,
    /** uncontrolled/controlled */
    from: ColumnSource | { fromPosition: number },
    /** uncontrolled/controlled */
    to: ColumnDestination | { toPosition: number },
): BoardInterface;
/**
 * Helper: `from` and `to` objects are the same ones passed to `onCardDragEnd` callback.
 * * Use with `onCardDragEnd` callback to update state with new board returned.
 */
export declare function moveCard(board: BoardInterface, from: CardSource, to: CardDestination): BoardInterface;
/**
 * Helper: Add the given card to specified column
 * * Use it inside the `renderColumnHeader` prop
 *  ```javascript
 * <Board
 *		children={board}
 *		renderColumnHeader={
 *			({ title }, {removeColumn, renameColumn, addCard}) => (
 *					<div>
 *						{title}
 *						<button onClick={() => removeColumn(column)}>
 *							Remove Column
 *						</button>
 *						<button onClick={() => renameColumn("New title")}>
 *							Rename Column
 *						</button>
 *						<button onClick={() => addCard({id:5, title:"Card"})}>
 *							Add Card
 *						</button>
 *					</div>
 *			)}
 *	/>
 *  ```
 */
export declare function addCard(card: Card): void;
/**
 * * Use in controlled board in `renderColumnHeader` prop
 */
export declare function addCard(
    board: BoardInterface,
    column: Column,
    card: Card,
    position: { on: 'top' | 'bottom' },
): BoardInterface;
/**
 * Change card id and optionally add/remove card properties
 * * Use in uncontrolled board
 */
export declare function changeCard(
    board: BoardInterface,
    cardId: number,
    object: { [key: string]: string | number },
): void;
/**
 * Remove card in specified column
 * * Use in controlled board
 */
export declare function removeCard(card: Card): void;
/**
 * Remove card in specified column
 * * Use in uncontrolled board
 */
export declare function removeCard(board: BoardInterface, fromColumn: ColumnSource, card: Card): void;

declare const Board: (props: BoardProps) => JSX.Element;

export default Board;
