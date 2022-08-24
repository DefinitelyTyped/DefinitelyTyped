// Type definitions for chess.js 0.13
// Project: https://github.com/jhlywa/chess.js
// Definitions by: Jacob Fischer <https://github.com/JacobFischer>
//                 Zachary Svoboda <https://github.com/zacnomore>
//                 Lars Kecker <https://github.com/CapOfCave>
//                 Vicary Archangel <https://github.com/vicary>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

/**
 * One of the possible squares on a chess board in san format,
 * e.g. "a8" to "h1".
 */
export type Square =
    | 'a8'
    | 'b8'
    | 'c8'
    | 'd8'
    | 'e8'
    | 'f8'
    | 'g8'
    | 'h8'
    | 'a7'
    | 'b7'
    | 'c7'
    | 'd7'
    | 'e7'
    | 'f7'
    | 'g7'
    | 'h7'
    | 'a6'
    | 'b6'
    | 'c6'
    | 'd6'
    | 'e6'
    | 'f6'
    | 'g6'
    | 'h6'
    | 'a5'
    | 'b5'
    | 'c5'
    | 'd5'
    | 'e5'
    | 'f5'
    | 'g5'
    | 'h5'
    | 'a4'
    | 'b4'
    | 'c4'
    | 'd4'
    | 'e4'
    | 'f4'
    | 'g4'
    | 'h4'
    | 'a3'
    | 'b3'
    | 'c3'
    | 'd3'
    | 'e3'
    | 'f3'
    | 'g3'
    | 'h3'
    | 'a2'
    | 'b2'
    | 'c2'
    | 'd2'
    | 'e2'
    | 'f2'
    | 'g2'
    | 'h2'
    | 'a1'
    | 'b1'
    | 'c1'
    | 'd1'
    | 'e1'
    | 'f1'
    | 'g1'
    | 'h1';

export type SquareColor = 'light' | 'dark';

/**
 * - "p" for Pawn
 * - "n" for Knight
 * - "b" for Bishop
 * - "r" for Rook
 * - "q" for Queen
 * - "k" for King
 */
export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';

/**
 * - "b" for Black
 * - "w" for White
 */
export type PieceColor = 'b' | 'w';

/**
 * Partial data about a chess move including the from and to square, and if a
 * promotion occured.
 */
export interface ShortMove {
    /**
     * The location the piece is moving from.
     * Must be in san format, e.g "h8"
     */
    from: Square;

    /**
     * The location the piece is moving to.
     * Must be in san format, e.g "a1"
     */
    to: Square;

    /**
     * If this move results in a promotion, this will have the unit promotion.
     */
    promotion?: Exclude<PieceType, 'p' | 'k'> | undefined;
}

/**
 * The full data about a chess move
 */
export interface Move extends ShortMove {
    /**
     * The color of the piece that moved
     * - "b" for Black
     * - "w" for White
     */
    color: PieceColor;

    /** Flags indicating what occurred, combined into one string */
    flags: string;

    /**
     * The type of the piece that moved
     */
    piece: PieceType;

    /** The Standard Algebraic Notation (SAN) representation of the move */
    san: string;

    /**
     * If an enemy piece was captured this is their type
     */
    captured?: Exclude<PieceType, 'k'> | undefined;
}

export interface Piece {
    /**
     * The type of the piece to place
     */
    type: PieceType;

    /**
     * The color of the piece
     * - "b" for Black
     * - "w" for White
     */
    color: PieceColor;
}

export interface Comment {
    fen: string;
    comment: string;
}

/** The string that represents the White color side */
export const WHITE: 'w';

/** The string that represents the Black color side */
export const BLACK: 'b';

/** The string that represents a Pawn */
export const PAWN: 'p';

/** The string that represents a Knight */
export const KNIGHT: 'n';

/** The string that represents a Bishop */
export const BISHOP: 'b';

/** The string that represents a Rook */
export const ROOK: 'r';

/** The string that represents a Queen */
export const QUEEN: 'q';

/** The string that represents a King */
export const KING: 'k';

/** The constant that represents an empty square or value */
export const EMPTY: number;

/** A list of all the squares in the game, from "a1" to "h8" */
export const SQUARES: [
    'a8',
    'b8',
    'c8',
    'd8',
    'e8',
    'f8',
    'g8',
    'h8',
    'a7',
    'b7',
    'c7',
    'd7',
    'e7',
    'f7',
    'g7',
    'h7',
    'a6',
    'b6',
    'c6',
    'd6',
    'e6',
    'f6',
    'g6',
    'h6',
    'a5',
    'b5',
    'c5',
    'd5',
    'e5',
    'f5',
    'g5',
    'h5',
    'a4',
    'b4',
    'c4',
    'd4',
    'e4',
    'f4',
    'g4',
    'h4',
    'a3',
    'b3',
    'c3',
    'd3',
    'e3',
    'f3',
    'g3',
    'h3',
    'a2',
    'b2',
    'c2',
    'd2',
    'e2',
    'f2',
    'g2',
    'h2',
    'a1',
    'b1',
    'c1',
    'd1',
    'e1',
    'f1',
    'g1',
    'h1',
];

/** Flags used to build flag strings for moves */
export const FLAGS: {
    /** a non-capture */
    NORMAL: 'n';
    /** a standard capture */
    CAPTURE: 'c';
    /** a pawn push of two squares */
    BIG_PAWN: 'b';
    /** an en passant capture */
    EP_CAPTURE: 'e';
    /** a promotion */
    PROMOTION: 'p';
    /** kingside castling */
    KSIDE_CASTLE: 'k';
    /** queenside castling */
    QSIDE_CASTLE: 'q';
};

export interface ChessInstance {
    /**
     * The board is cleared, and the FEN string is loaded.
     * Returns true if the position was successfully loaded, otherwise false
     * @param fen the fen formatted string to load
     * @returns true if the position was successfully loaded, otherwise
     * false
     */
    load(fen: string): boolean;

    /**
     * Reset the board to the initial starting position.
     */
    reset(): void;

    /**
     * Returns a list of legal moves from the current position.
     * The function takes an optional parameter which controls the
     * single-square move generation and verbosity.
     * @param options an optional parameter which controls the single-square
     * move generation and verbosity.
     * @returns The list of all valid moves, either in SAN format, or as
     * verbose objects.
     */
    moves(options: {
        /**
         * Set to true to return return pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        legal?: boolean | undefined;
        /** Set to true to return verbose move objects instead of strings */
        verbose: true;
        /**
         * The string to test if it is a valid move, if it is not then an
         * empty array is returned
         */
        square?: string | undefined;
    }): Move[];

    /**
     * Returns a list of legal moves from the current position.
     * The function takes an optional parameter which controls the
     * single-square move generation and verbosity.
     * @param options an optional parameter which controls the single-square
     * move generation and verbosity.
     * @returns The list of all valid moves, either in SAN format, or as
     * verbose objects.
     */
    moves(options?: {
        /**
         * Set to true to return return pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        legal?: boolean | undefined;
        /** Set to true to return verbose move objects instead of strings */
        verbose?: false | undefined;
        /**
         * The string to test if it is a valid move, if it is not then an
         * empty array is returned
         */
        square?: string | undefined;
    }): string[];

    /**
     * Returns a list of legal moves from the current position.
     * The function takes an optional parameter which controls the
     * single-square move generation and verbosity.
     * @param options an optional parameter which controls the single-square
     * move generation and verbosity.
     * @returns The list of all valid moves, either in SAN format, or as
     * verbose objects.
     */
    moves(options?: {
        /**
         * Set to true to return return pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        legal?: boolean | undefined;
        /** Set to true to return verbose move objects instead of strings */
        verbose?: boolean | undefined;
        /**
         * The string to test if it is a valid move, if it is not then an
         * empty array is returned
         */
        square?: string | undefined;
    }): string[] | Move[];

    /**
     * Returns true or false if the side to move is in check.
     * @returns true or false if the side to move is in check.
     */
    in_check(): boolean;

    /**
     * Returns true or false if the side to move has been checkmated.
     * @returns true or false if the side to move has been checkmated.
     */
    in_checkmate(): boolean;
    /**
     * Returns true or false if the side to move has been stalemated.
     * @returns true or false if the side to move has been stalemated.
     */
    in_stalemate(): boolean;

    /**
     * Returns true or false if the game is drawn (50-move rule or
     * insufficient material).
     * @returns true or false if the game is drawn (50-move rule or
     * insufficient material).
     */
    in_draw(): boolean;

    /**
     * Returns true if the game is drawn due to insufficient material
     * (K vs. K, K vs. KB, or K vs. KN); otherwise false.
     * @returns True if the game is drawn due to insufficient material
     * (K vs. K, K vs. KB, or K vs. KN); otherwise false.
     */
    insufficient_material(): boolean;

    /**
     * Returns true or false if the current board position has occurred three
     * or more times.
     * @returns true or false if the current board position has occurred three
     * or more times.
     */
    in_threefold_repetition(): boolean;

    /**
     * Returns true if the game has ended via checkmate, stalemate, draw,
     * threefold repetition, or insufficient material.
     * Otherwise, returns false.
     * @returns True if the game has ended via checkmate, stalemate, draw,
     * threefold repetition, or insufficient material. Otherwise, returns
     * false.
     */
    game_over(): boolean;

    /**
     * Returns a validation object specifying validity or the errors found
     * within the FEN string.
     * @param fen the fen formatted string to validate
     */
    validate_fen(fen: string): {
        /** Indicates if the fen is valid or not. */
        valid: boolean;

        /**
         * If not valid, then this will a type of error used internally in
         * chess.js. Otherwise 0.
         */
        error_number: number;

        /**
         * The string "No errors." if valid. Otherwise a string explaining why
         * it is not valid.
         */
        error: string;
    };

    /**
     * Returns the FEN string for the current position.
     * @returns the FEN string for the current position.
     */
    fen(): string;

    /**
     * Returns the game in PGN format.
     * Options is an optional parameter which may include max width and/or a
     * newline character settings.
     * @param options optional object which may include max width and/or a
     * newline character settings.
     * @returns the current game state in PGN format.
     */
    pgn(options?: {
        /** the maximum width of a line */
        max_width?: number | undefined;
        /** Specific newline character */
        newline_char?: string | undefined;
    }): string;

    /**
     * Load the moves of a game stored in Portable Game Notation.
     * @param pgn the pgn should be a string in Portable Game Notation.
     * @param options An optional object which may contain a string
     * newline_char and a boolean sloppy.
     * @returns The method will return true if the PGN was parsed successfully,
     * otherwise false.
     */
    load_pgn(
        pgn: string,
        options?: {
            /**
             * The newline_char is a string representation of a valid RegExp
             * fragment and is used to process the PGN.
             * It defaults to \r?\n.
             * Special characters should not be pre-escaped, but any literal
             * special characters should be escaped as is normal for a RegExp.
             * Keep in mind that backslashes in JavaScript strings must
             * themselves be escaped.
             * Avoid using a newline_char that may occur elsewhere in a PGN,
             * such as . or x, as this will result in unexpected behavior.
             */
            newline_char?: string | undefined;

            /**
             * The sloppy flag is a boolean that permits chess.js to parse moves in
             * non-standard notations.
             * See .move documentation for more information about non-SAN
             * notations.
             */
            sloppy?: boolean | undefined;
        },
    ): boolean;

    /**
     * Allows header information to be added to PGN output.
     * Any number of key/value pairs can be passed to .header(), with each
     * first arg being treated as a header key, and each second as the value.
     * @param args (optional) Header pairs to store in the header.
     * @returns The current header information after storing any values.
     */
    header(...args: string[]): { [key: string]: string | undefined };

    /**
     * Returns a string containing an ASCII diagram of the current position.
     * @returns A string containing an ASCII diagram of the current position.
     */
    ascii(): string;

    /**
     * Returns the current side to move.
     * @returns "b" if Black is the side to move, otherwise "w" for White.
     */
    turn(): PieceColor;

    /**
     * Attempts to make a move on the board, returning a move object if the
     * move was legal, otherwise null.
     * The .move function can be called two ways, by passing a string in
     * Standard Algebraic Notation (SAN),
     * Or by passing .move() a move object (only the 'to', 'from', and when
     * necessary 'promotion', fields are needed).
     * @param move Must be either a string in Standard Algebraic Notation
     * (SAN), or a move object (only the 'to', 'from', and when necessary
     * 'promotion', fields are needed)
     * @param options An optional sloppy flag can be used to parse a variety of
     * non-standard move notations:
     * @returns The move as a full object is returned if the move was valid,
     * and the chess board's state changes.
     * If the move was invalid, null is returned and the state does not update.
     */
    move(
        move: string | ShortMove,
        options?: {
            /**
             * An optional sloppy flag can be used to parse a variety of
             * non-standard move notations.
             */
            sloppy?: boolean | undefined;
        },
    ): Move | null;

    /**
     * Take back the last half-move, returning a move object if successful,
     * otherwise null.
     * @returns the move object that was undone if successful, otherwise null.
     */
    undo(): Move | null;

    /**
     * Clears the board of all pieces.
     */
    clear(): void;

    /**
     * Place a piece on the square where piece is an object with the form
     * { type: ..., color: ... }.
     * put() will fail when passed an invalid piece or square, or when two
     * or more kings of the same color are placed.
     * @param piece the piece to put somewhere on the game board.
     * @param square the square on the chess board to place the piece at.
     * @returns true if the piece was successfully placed, otherwise, the
     * board remains unchanged and false is returned.
     */
    put(piece: Piece, square: Square): boolean;

    /**
     * Returns the piece on the square
     * @param square the square to get the piece on.
     * @returns null if no piece is on that square, or it is not a valid
     * square. Otherwise a piece object.
     */
    get(square: Square): Piece | null;

    /**
     * Remove and return the piece on square.
     * @param square the square to remove the piece from, e.g. "b6"
     * @returns null if no piece was removed, otherwise an object with the
     * removed piece's type and color.
     */
    remove(square: Square): Piece | null;

    // This is a debugging utility, and is not documented in their readme.
    // So it is not included in these type definitions.
    // perft(depth: number): number,

    /**
     * Returns the color of the square ('light' or 'dark').
     * @param square the square to check if it is light or dark.
     * @returns "light" if a light square, "dark" if a dark square, or null if
     * not a valid square.
     */
    square_color(square: Square): SquareColor;

    /**
     * Returns the color of the square ('light' or 'dark').
     * @param square the square to check if it is light or dark.
     * @returns "light" if a light square, "dark" if a dark square, or null if
     * not a valid square.
     */
    square_color(square: string): SquareColor | null;

    /**
     * Returns a list containing the moves of the current game.
     * Options is an optional parameter which may contain a 'verbose' flag.
     * See .moves() for a description of the verbose move fields.
     * @param options an optional parameter which may contain a 'verbose' flag.
     * @returns a list of all moves of the current game. They will be strings
     * if not passed the verbose flag.
     */
    history(options?: {
        /**
         * Pass true if you want this function to output verbose objects
         * instead of strings.
         */
        verbose?: false | undefined;
    }): string[];

    /**
     * Returns a list containing the moves of the current game.
     * Options is an optional parameter which may contain a 'verbose' flag.
     * See .moves() for a description of the verbose move fields.
     * @param options an optional parameter which may contain a 'verbose' flag.
     * @returns a list of all moves of the current game. They will be strings
     * if not passed the verbose flag.
     */
    history(options: {
        /**
         * Pass true if you want this function to output verbose objects
         * instead of strings.
         */
        verbose: true;
    }): Move[];

    /**
     * Returns a list containing the moves of the current game.
     * Options is an optional parameter which may contain a 'verbose' flag.
     * See .moves() for a description of the verbose move fields.
     * @param options an optional parameter which may contain a 'verbose' flag.
     * @returns a list of all moves of the current game. They will be strings
     * if not passed the verbose flag.
     */
    history(options?: {
        /**
         * Pass true if you want this function to output verbose objects
         * instead of strings.
         */
        verbose?: boolean | undefined;
    }): string[] | Move[];

    board(): Array<Array<{ type: PieceType; color: PieceColor; square: Square } | null>>;

    get_comment(): string | undefined;

    set_comment(comment: string): void;

    delete_comment(): string | undefined;

    get_comments(): Comment[];

    delete_comments(): Comment[];
}

/**
 * The chess.js function that is used to build chess game instances.
 * It can be used with or without `new` to build your instance. Both variants
 * work the same.
 */
export const Chess: {
    /**
     * The Chess() constructor takes an optional parameter which specifies
     * the board configuration in Forsyth-Edwards Notation.
     * @param fen specifies the board configuration in Forsyth-Edwards Notation.
     */
    (fen?: string): ChessInstance;

    /**
     * The Chess() constructor takes an optional parameter which specifies
     * the board configuration in Forsyth-Edwards Notation.
     * @param fen specifies the board configuration in Forsyth-Edwards Notation.
     */
    new (fen?: string): ChessInstance;
};
