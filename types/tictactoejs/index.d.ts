// Type definitions for tictactoejs 1.0
// Project: https://www.npmjs.com/package/tictactoejs
// Definitions by: VenNeptury <https://github.com/Mattis6666>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class TicTacToe {
  /**
   * The game's constructor
   */
  constructor(requestSize?: number);
  /**
   * Restart the game
   */
  reset(requestSize?: number): void;
  /**
   * Get the current game's size
   * @returns the game size
   */
  getSize(): number;
  /**
   * Check, whether it's X' turn or O's
   * @returns whose turn it is
   */
  turn(): "X" | "O";
  /**
   * Get the current board
   * @returns the current board as ascii
   */
  ascii(): string;
  /**
   * Get the current board
   * @returns the current board as ascii (alternative style)
   */
  ascii2(): string;
  /**
   * Does a move (bottom left is 1|1, bottom right is 3|1)
   * @returns whether the move was successful
   */
  move(x: number, y: number): boolean;
  /**
   * Check whether the provided coordinates exist on the current board
   * @returns whether the current coordinates exist
   */
  exists(x: number, y: number): boolean;
  /**
   * Check which player occupies the provided coordinates
   * @returns the player occupying these coordinates
   */
  get(x: number, y: number): "X" | "O" | null;
  /**
   * Do a move with array style coordinates (top left is 0|0, top right is 0|2)
   * @returns whether the move was successful
   */
  moveArray(row: number, col: number): boolean;
  /**
   * Check the game's current state
   * @returns the game state
   */
  status(): "X" | "O" | "draw" | "in progress";
  /**
   * Check whether the game is over
   * @returns the game state
   */
  gameOver(): boolean;
  /**
   * Check whether the game ended in a draw
   * @returns the game state
   */
  isDraw(): boolean;
  /**
   * Check the valid moves (all unoccupied coordinates)
   * @returns an array of objects with the x and y values
   */
  legalMoves(): [{ x: number; y: number }];
  /**
   * Do a random move (no logic or AI involved, this is completely random)
   * @returns an object with the x and y value of the random move
   */
  randomMove(): { x: number; y: number };
}
