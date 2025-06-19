import React = require("react");

type Color = "white" | "black";
type Role = "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
type File = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type Key = "a0" | `${File}${Rank}`;
type SquareClasses = Map<Key, string>;
type Dests = Map<Key, Key[]>;

interface Piece {
    role: Role;
    color: Color;
    promoted?: boolean;
}

interface HighlightOptions {
    lastMove?: boolean;
    check?: boolean;
    custom?: SquareClasses;
}

interface AnimationOptions {
    enabled?: boolean;
    duration?: number;
}

interface MoveMetadata {
    premove: boolean;
    ctrlKey?: boolean;
    holdTime?: number;
    captured?: Piece;
    predrop?: boolean;
}

interface MovableOptions {
    free?: boolean;
    color?: Color | "both";
    dests?: Dests;
    showDests?: boolean;
    events?: {
        after?: (orig: Key, dest: Key, metadata: MoveMetadata) => void;
        afterNewPiece?: (role: Role, key: Key, metadata: MoveMetadata) => void;
    };
    rookCastle?: boolean;
}

interface PremovableOptions {
    enabled?: boolean;
    showDests?: boolean;
    castle?: boolean;
    dests?: Key[];
    customDests?: Dests;
    events?: {
        set?: (orig: Key, dest: Key, metadata?: { ctrlKey?: boolean }) => void;
        unset?: () => void;
    };
}

interface PredroppableOptions {
    enabled?: boolean;
    events?: {
        set?: (role: Role, key: Key) => void;
        unset?: () => void;
    };
}

interface DraggableOptions {
    enabled?: boolean;
    distance?: number;
    autoDistance?: boolean;
    showGhost?: boolean;
    deleteOnDropOff?: boolean;
}

interface DrawShapePiece {
    role: Role;
    color: Color;
    scale?: number;
}

interface DrawModifiers {
    lineWidth?: number;
    hilite?: boolean;
}

interface DrawShape {
    orig: Key;
    dest?: Key;
    brush?: string;
    modifiers?: DrawModifiers;
    piece?: DrawShapePiece;
    customSvg?: { html: string; center?: "orig" | "dest" | "label" };
    label?: { text: string; fill?: string };
}

interface DrawBrush {
    key: string;
    color: string;
    opacity: number;
    lineWidth: number;
}

interface DrawBrushes {
    green: DrawBrush;
    red: DrawBrush;
    blue: DrawBrush;
    yellow: DrawBrush;
    [color: string]: DrawBrush;
}

interface DrawableOptions {
    enabled?: boolean;
    visible?: boolean;
    defaultSnapToValidMove?: boolean;
    eraseOnClick?: boolean;
    shapes?: DrawShape[];
    autoShapes?: DrawShape[];
    brushes?: DrawBrushes;
    onChange?: (shapes: DrawShape[]) => void;
}

interface ReactChessGroundProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "draggable" | "onSelect"> {
    width?: string | number;
    height?: string | number;
    fen?: string;
    orientation?: Color;
    turnColor?: Color;
    check?: Color | boolean;
    lastMove?: Key[];
    selected?: Key;
    coordinates?: boolean;
    autoCastle?: boolean;
    viewOnly?: boolean;
    disableContextMenu?: boolean;
    resizable?: boolean;
    addPieceZIndex?: boolean;
    highlight?: HighlightOptions;
    animation?: AnimationOptions;
    movable?: MovableOptions;
    premovable?: PremovableOptions;
    predroppable?: PredroppableOptions;
    draggable?: DraggableOptions;
    selectable?: { enabled?: boolean };
    drawable?: DrawableOptions;
    onChange?: () => void;
    onMove?: (orig: Key, dest: Key, capturedPiece?: Piece) => void;
    onDropNewPiece?: (piece: Piece, key: Key) => void;
    onSelect?: (key: Key) => void;
}

declare class Chessground extends React.Component<ReactChessGroundProps> {}

export = Chessground;
