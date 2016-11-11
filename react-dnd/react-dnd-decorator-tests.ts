///<reference path="react-dnd.d.ts" />
///<reference path="react-dnd-html5-backend.d.ts" />
///<reference path="react-dnd-test-backend.d.ts" />
"use strict";

// Test adapted from the ReactDnD chess game tutorial:
// http://gaearon.github.io/react-dnd/docs-tutorial.html

import React = require("react");
import ReactDnd = require("react-dnd");

var r = React.DOM;

import DragSource = ReactDnd.DragSource;
import DropTarget = ReactDnd.DropTarget;
import DragLayer = ReactDnd.DragLayer;
import DragDropContext = ReactDnd.DragDropContext;
import HTML5Backend, { getEmptyImage, NativeTypes } from "react-dnd-html5-backend";
import TestBackend from "react-dnd-test-backend";

// Game Component
// ----------------------------------------------------------------------

namespace Game {
    var knightPosition = [0, 0];
    var observer: any = null;

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

var ItemTypes = {
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

    var knightSource: ReactDnd.DragSourceSpec<KnightP> = {
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

    @DragSource(ItemTypes.KNIGHT, knightSource, knightCollect)
    export class Knight extends React.Component<KnightP, {}> {
        static defaultProps: KnightP;

        static create = React.createFactory(Knight);

        componentDidMount() {
            var img = getEmptyImage();
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

    export var create = React.createFactory(Knight);
}

// Square Component
// ----------------------------------------------------------------------

namespace Square {
    interface SquareP extends React.Props<Square> {
        black: boolean;
    }

    export class Square extends React.Component<SquareP, {}> {
        render() {
            var fill = this.props.black ? 'black' : 'white';
            return r.div({
                style: {
                    backgroundColor: fill
                }
            })
        }
    }

    export var create = React.createFactory(Square);
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

    var boardSquareTarget: ReactDnd.DropTargetSpec<BoardSquareP> = {
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

    @DropTarget(ItemTypes.KNIGHT, boardSquareTarget, boardSquareCollect)
    @DropTarget(NativeTypes.FILE, boardSquareTarget, boardSquareCollect)
    export class BoardSquare extends React.Component<BoardSquareP, {}> {
        static defaultProps: BoardSquareP;

        private _renderOverlay = (color: string) => {
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
        };

        render() {
            var black = (this.props.x + this.props.y) % 2 === 1;
            var isOver = this.props.isOver;
            var canDrop = this.props.canDrop;

            return this.props.connectDropTarget(
                    r.div({
                        style: {
                            position: 'relative',
                            width: '100%',
                            height: '100%'
                        },
                        children: [
                            Square.create({
                                black: black
                            }),
                            isOver && !canDrop ? this._renderOverlay('red') : null,
                            !isOver && canDrop ? this._renderOverlay('yellow') : null,
                            isOver && canDrop ? this._renderOverlay('green') : null
                        ]
                    })
            );
        }
    }
    
    export var create = React.createFactory(BoardSquare);
}

// Custom Drag Layer Component
// ----------------------------------------------------------------------
namespace CustomDragLayer {
    interface CustomDragLayerP extends React.Props<CustomDragLayer> {
        isDragging?: boolean;
        item?: Object;
    }

    function dragLayerCollect(monitor: ReactDnd.DragLayerMonitor) {
        return {
            isDragging: monitor.isDragging(),
            item: monitor.getItem(),
        };
    }

    @DragLayer(dragLayerCollect)
    export class CustomDragLayer extends React.Component<CustomDragLayerP, {}> {
        render() {
            return r.div(null, this.props.isDragging ? this.props.item : null);
        }
    }

    export var create = React.createFactory(CustomDragLayer);
}

// Board Component
// ----------------------------------------------------------------------

namespace Board {
    interface BoardP extends React.Props<Board> {
        knightPosition: number[];
    }

    export class Board extends React.Component<BoardP, {}> {
        private _renderPiece = (x: number, y: number) => {
            var knightX = this.props.knightPosition[0];
            var knightY = this.props.knightPosition[1];
            return x === knightX && y === knightY ?
                    Knight.create() :
                    null;
        };

        private _renderSquare = (i: number) => {
            var x = i % 8;
            var y = Math.floor(i / 8);

            return r.div({
                key: i,
                style: {
                    width: '12.5%',
                    height: '12.5%'
                }
            }, BoardSquare.create({
                x: x,
                y: y
            }, this._renderPiece(x, y)));
        };

        render() {
            var squares: React.ReactHTMLElement<HTMLDivElement>[] = [];
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

    @DragDropContext(HTML5Backend)
    export class BoardWithHTML5Backend extends Board {

    }

    @DragDropContext(TestBackend)
    export class BoardWithTestBackend extends Board {

    }

    export var createWithHTMLBackend = React.createFactory(BoardWithHTML5Backend);
    export var createWithTestBackend = React.createFactory(BoardWithTestBackend);
}

// Render the Board Component
// ----------------------------------------------------------------------

Board.createWithHTMLBackend({
    knightPosition: [0, 0]
});


Board.createWithTestBackend({
    knightPosition: [0, 0]
});
