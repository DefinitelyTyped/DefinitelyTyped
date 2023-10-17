declare namespace pgnParser {
    /**
     * The result of a game or sequence of moves.
     */
    type Result =
        | "1-0" // White wins
        | "0-1" // Black wins
        | "1/2-1/2" // Draw
        | "*"; // Game ongoing or result inconclusive

    /**
     * A PGN comment.
     */
    interface Comment {
        text: string;
    }

    /**
     * A PGN header.
     */
    interface Header {
        /**
         * The name of the header.
         * For the header '[Date "2004.01.24"]' the name is 'Date'
         * For the header '[White "Magnus Carlsen"]' the name is 'White'
         */
        name: string;

        /**
         * The value of the header.
         * For the header '[Date "2004.01.24"]' the value is '2004.01.24'
         * For the header '[White "Magnus Carlsen"]' the value is 'Magnus Carlsen'
         */
        value: string;
    }

    /**
     * A chess half-move (one ply).
     */
    interface Move {
        /**
         * A single half-move, such as 'Nf6' or 'd4'
         */
        move: string;

        /**
         * The list of comments that are associated with this move.
         */
        comments: string[];

        /**
         * The number of the move. Moves made by white will have a move_number, but black
         * moves will not.
         */
        move_number?: number;

        /**
         * A list of alternative sequences of moves. The first move of each Rav is an
         * alternative to this move. If the PGN does not provide alternatives for this
         * move, ravs will be undefined.
         */
        ravs?: Rav[];
    }

    /**
     * An alternative sequence of moves.
     */
    interface Rav {
        /**
         * The list of moves.
         */
        moves: Move[];

        /**
         * The result of the sequence of moves.
         */
        result: Result | null;
    }

    /**
     * The type returned by the parse function (if the parse was successful).
     */
    interface ParsedPGN {
        /**
         * A list of the comments that were above the headers. This will be null if there
         * were no comments above the headers.
         */
        comments_above_header: Comment[] | null;

        /**
         * The headers of the pgn. This will be null if there were no headers.
         */
        headers: Header[] | null;

        /**
         * The comments that were between the headers and the moves. This will be null if
         * there were no comments between the headers and the moves.
         */
        comments: Comment[] | null;

        /**
         * The moves of the game
         */
        moves: Move[];

        /**
         * The result of the game
         */
        result: Result;
    }

    interface PgnParser {
        /**
         * Parse a PGN string. Throw an error if the parse is unsuccessful.
         *
         * @param pgnString
         * @throws {SyntaxError}
         */
        parse(pgnString: string): ParsedPGN[];
    }
}

declare const pgnParser: pgnParser.PgnParser;

export = pgnParser;
