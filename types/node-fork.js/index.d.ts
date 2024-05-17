// piecemoves.d.ts
 

export type castlingType = "long"|"short"
export type TypeofBoard = CellTypeMinimal[][] | CellType[][]
export type FrontendBoard = CellType[][]
export type Board = CellTypeMinimal[][] 
export type PieceType = 'rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'pawn';

export interface canCastleType{
    long:ChessSquare | "",
    short:ChessSquare | ""
}
export type ChessSquare = "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" |
    "b1" | "b2" | "b3" | "b4" | "b5" | "b6" | "b7" | "b8" |
    "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7" | "c8" |
    "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7" | "d8" |
    "e1" | "e2" | "e3" | "e4" | "e5" | "e6" | "e7" | "e8" |
    "f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" |
    "g1" | "g2" | "g3" | "g4" | "g5" | "g6" | "g7" | "g8" |
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";

export type chessPiecesType = Record<string, PieceType> 
export interface Piece {
    name: PieceType;
    color: "white" | "black";
}

export interface CellType {
    cell_color: "white" | "black";
    highlight: boolean;
    piece: null | Piece;
    selected: boolean;
    square: ChessSquare;
}

export interface CellTypeMinimal {
    cell_color: "white" | "black"; 
    piece: Piece | null; 
    square: ChessSquare;
}

export interface CapturesType {
    captures: Piece[];
    lead: number;
}

export interface ChessGame {
    board: CellType[][];
    highlighted: ChessSquare[];
    selected: ChessSquare | "";
    check: ChessSquare | "";
    turn: "white" | "black";
    captured: Piece[];
    color: "white" | "black" | null;
    winner: "white" | "black" | "-1" | null;
}

export interface MoveFunction {
    (notation: ChessSquare, color: string, board: (CellType | CellTypeMinimal)[][]): ChessSquare[];
}


export type Moves = (ChessSquare)[] 

export type PieceColor = "white" | "black"

export type fenChessPiecesType = Record<string, { name: PieceType, color: PieceColor }>
export type fenChessCodeType = Record<string, string>
export type piecePointsType = Record<PieceType, number>

export declare class Chess {
    board: CellTypeMinimal[][]
    protected checked_king: ChessSquare | ""
    protected turn: PieceColor
    captured: Piece[]
    color: PieceColor | null
    protected winner: PieceColor | "-1" | null
    protected cancastle: Record<PieceColor,canCastleType>

    constructor();
    getCaptures(color: PieceColor): any 
    createBoard(fen: string | undefined): void;
    encodeBoard( ): string;
    toggleMove( ): void;
    protected postMoveTasks (piececolor:PieceColor):void; 
    isCheck(color: PieceColor, board: TypeofBoard): ChessSquare | null;
    isMate(color: PieceColor): boolean; 
    updateResult(result: PieceColor | "-1" | null):void
    getPieces(color: PieceColor, board: TypeofBoard):ChessSquare[]  
    protected updateCastlingRights(color: PieceColor): void;
    protected createBoardRow(cols: string, row: number): CellTypeMinimal[]  
    getPieceMoves(square: ChessSquare, piece: Piece, board: FrontendBoard): ChessSquare[];
    protected copyBoard(): FrontendBoard;
    protected validateMove(from: ChessSquare, to: ChessSquare): boolean 
    makeMove(from: ChessSquare, to: ChessSquare):boolean
    }

export declare class ChessFrontend extends Chess {
    board: FrontendBoard;
    highlighted: ChessSquare[];
    selected: ChessSquare | "";

    constructor(fenstring?: string); 
}
