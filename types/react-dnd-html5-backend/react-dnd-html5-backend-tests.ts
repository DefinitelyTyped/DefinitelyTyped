// Test adapted from the ReactDnD chess game tutorial:
// http://gaearon.github.io/react-dnd/docs-tutorial.html

import * as React from "react";
import * as DOM from "react-dom-factories";
import * as ReactDnd from "react-dnd";

const r = DOM;

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;
import DragLayer = ReactDnd.DragLayer;
import DragDropContext = ReactDnd.DragDropContext;
import HTML5Backend, { getEmptyImage } from 'react-dnd-html5-backend';
// Game Component
// ----------------------------------------------------------------------

namespace Game {
    let knightPosition = [0, 0];
    let observer: any = null;

    function emitChange() {
        observer(knightPosition);
    }

    export function observe(o: any) {
        if (observer) {
            throw new Error("Multiple observers not implemented.");
        }

        observer = o;
        emitChange();
    }

    export function moveKnight(toX: number, toY: number) {
        knightPosition = [toX, toY];
        emitChange();
    }

    export function canMoveKnight(toX: number, toY: number) {
        const x = knightPosition[0];
        const y = knightPosition[1];
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
               (Math.abs(dx) === 1 && Math.abs(dy) === 2);
    }
}

const ItemTypes = {
    KNIGHT: "knight"
};

// Knight Component
// ----------------------------------------------------------------------

namespace Knight {
    interface KnightP extends React.Props<Knight> {
        connectDragSource: ReactDnd.ConnectDragSource;
        connectDragPreview: ReactDnd.ConnectDragPreview;
        isDragging: boolean;
    }

    const knightSource: ReactDnd.DragSourceSpec<KnightP> = {
        beginDrag: (props) => {
            return {};
        }
    };

    function knightCollect(connect: ReactDnd.DragSourceConnector, monitor: ReactDnd.DragSourceMonitor) {
        return {
            connectDragSource: connect.dragSource(),
            connectDragPreview: connect.dragPreview(),
            isDragging: monitor.isDragging()
        };
    }

    export class Knight extends React.Component<KnightP> {
        static defaultProps: KnightP;

        static create = React.createFactory(Knight);

        componentDidMount() {
            const img = getEmptyImage();
            img.onload = () => this.props.connectDragPreview(img);
        }

        render() {
            return this.props.connectDragSource(
                    r.div({
                        style: {
                            opacity: this.props.isDragging ? 0.5 : 1,
                            fontSize: 25,
                            fontWeight: 'bold',
                            cursor: 'move'
                        }
                    }, "♘")
            );
        }
    }

    export const DndKnight = DragSource(ItemTypes.KNIGHT, knightSource, knightCollect)(Knight);
    export const create = React.createFactory(DndKnight);
}

// Square Component
// ----------------------------------------------------------------------

namespace Square {
    interface SquareP extends React.Props<Square> {
        black: boolean;
    }

    export class Square extends React.Component<SquareP> {
        render() {
            const fill = this.props.black ? 'black' : 'white';
            return r.div({
                style: {
                    backgroundColor: fill
                }
            });
        }
    }

    export const create = React.createFactory(Square);
}

// BoardSquare Component
// ----------------------------------------------------------------------

namespace BoardSquare {
    interface BoardSquareP extends React.Props<BoardSquare> {
        x: number;
        y: number;
        connectDropTarget?: ReactDnd.ConnectDropTarget;
        isOver?: boolean;
        canDrop?: boolean;
    }

    const boardSquareTarget: ReactDnd.DropTargetSpec<BoardSquareP> = {
        canDrop: (props) => Game.canMoveKnight(props.x, props.y),
        drop: (props) => Game.moveKnight(props.x, props.y)
    };

    function boardSquareCollect(connect: ReactDnd.DropTargetConnector, monitor: ReactDnd.DropTargetMonitor) {
        return {
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        };
    }

    export class BoardSquare extends React.Component<BoardSquareP> {
        static defaultProps: BoardSquareP;

        private readonly _renderOverlay = (color: string) => {
            return r.div({
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: color
                }
            });
        }

        render() {
            const black = (this.props.x + this.props.y) % 2 === 1;
            const isOver = this.props.isOver;
            const canDrop = this.props.canDrop;

            return this.props.connectDropTarget(
                    r.div({
                        style: {
                            position: 'relative',
                            width: '100%',
                            height: '100%'
                        },
                        children: [
                            Square.create({ black }),
                            isOver && !canDrop ? this._renderOverlay('red') : null,
                            !isOver && canDrop ? this._renderOverlay('yellow') : null,
                            isOver && canDrop ? this._renderOverlay('green') : null
                        ]
                    })
            );
        }
    }

    export const DndBoardSquare = DropTarget(ItemTypes.KNIGHT, boardSquareTarget, boardSquareCollect)(BoardSquare);
    export const create = React.createFactory(DndBoardSquare);
}

// Custom Drag Layer Component
// ----------------------------------------------------------------------
namespace CustomDragLayer {
    interface CustomDragLayerP extends React.Props<CustomDragLayer> {
        isDragging?: boolean;
        item?: {};
    }

    function dragLayerCollect(monitor: ReactDnd.DragLayerMonitor) {
        return {
            isDragging: monitor.isDragging(),
            item: monitor.getItem(),
        };
    }

    export class CustomDragLayer extends React.Component<CustomDragLayerP> {
        render() {
            return r.div(null, this.props.isDragging ? this.props.item : null);
        }
    }

    export const dragLayer = DragLayer(dragLayerCollect)(CustomDragLayer);

    export const create = React.createFactory(dragLayer);
}

// Board Component
// ----------------------------------------------------------------------

namespace Board {
    interface BoardP extends React.Props<Board> {
        knightPosition: number[];
    }

    export class Board extends React.Component<BoardP> {
        private readonly _renderPiece = (x: number, y: number) => {
            const knightX = this.props.knightPosition[0];
            const knightY = this.props.knightPosition[1];
            return x === knightX && y === knightY ?
                    Knight.create() :
                    null;
        }

        private readonly _renderSquare = (i: number) => {
            const x = i % 8;
            const y = Math.floor(i / 8);

            return r.div({
                key: i,
                style: {
                    width: '12.5%',
                    height: '12.5%'
                }
            }, BoardSquare.create({ x, y }, this._renderPiece(x, y)));
        }

        render() {
            const squares: Array<React.ReactHTMLElement<HTMLDivElement>> = [];
            for (let i = 0; i < 64; i++) {
                squares.push(this._renderSquare(i));
            }

            return r.div({
                children: [
                    CustomDragLayer.create(),
                    r.div({
                        style: {
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexWrap: 'wrap'
                        },
                        children: squares
                    })
                ]
            });
        }
    }

    export const createWithHTMLBackend = React.createFactory(DragDropContext(HTML5Backend)(Board));
}

// Render the Board Component
// ----------------------------------------------------------------------

Board.createWithHTMLBackend({
    knightPosition: [0, 0]
});
