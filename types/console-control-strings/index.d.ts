/**
 * A library of cross-platform tested terminal/console command strings for
 * doing things like color and cursor positioning. This is a subset of both
 * ANSI and VT100. All control codes included work on both Windows and
 * Unix-like OSes, except where noted.
 */

/**
 * Returns the escape sequence to move `num` lines up.
 * @param num Number of lines to move up. Defaults to 1.
 */
export function up(num?: number): string;

/**
 * Returns the escape sequence to move `num` lines down.
 * @param num Number of lines to move down. Defaults to 1.
 */
export function down(num?: number): string;

/**
 * Returns the escape sequence to move `num` characters forward (to the right).
 * @param num Number of characters to move forward. Defaults to 1.
 */
export function forward(num?: number): string;

/**
 * Returns the escape sequence to move `num` characters back (to the left).
 * @param num Number of characters to move back. Defaults to 1.
 */
export function back(num?: number): string;

/**
 * Returns the escape sequence to move `num` lines down and to the beginning of the line.
 * @param num Number of lines to move down. Defaults to 1.
 */
export function nextLine(num?: number): string;

/**
 * Returns the escape sequence to move `num` lines up and to the beginning of the line.
 * @param num Number of lines to move up. Defaults to 1.
 */
export function previousLine(num?: number): string;

/**
 * Returns the escape sequence to move the cursor to the designated column.
 * @param num Column position (1-based).
 */
export function horizontalAbsolute(num: number): string;

/**
 * Returns the escape sequence to erase everything from the current cursor
 * position to the bottom right of the screen.
 */
export function eraseData(): string;

/**
 * Returns the escape sequence to erase to the end of the current line.
 */
export function eraseLine(): string;

/**
 * Returns the escape sequence to move the cursor to the designated position.
 * Note that the origin is 1, 1 not 0, 0.
 * @param x Column position (1-based).
 * @param y Row position (1-based).
 */
export function goto(x: number, y: number): string;

/**
 * Returns a carriage return (moves the cursor to the start of the line).
 */
export function gotoSOL(): string;

/**
 * Returns the unicode character `\x0007`, a Control-G, which in many
 * terminals will trigger an audible beep.
 */
export function beep(): string;

/**
 * Returns the escape sequence to hide the cursor.
 */
export function hideCursor(): string;

/**
 * Returns the escape sequence to show the cursor.
 */
export function showCursor(): string;

/**
 * Returns the escape sequence to set the specified terminal display attributes (colors and styles).
 *
 * Supported values include:
 * - Styles: `reset`, `bold`, `italic`, `underline`, `inverse`,
 *   `stopBold`, `stopItalic`, `stopUnderline`, `stopInverse`
 * - Foreground colors: `white`, `black`, `blue`, `cyan`, `green`, `magenta`, `red`, `yellow`,
 *   `grey`/`brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`,
 *   `brightMagenta`, `brightCyan`, `brightWhite`
 * - Background colors: `bgWhite`, `bgBlack`, `bgBlue`, `bgCyan`, `bgGreen`, `bgMagenta`,
 *   `bgRed`, `bgYellow`, `bgGrey`/`bgBrightBlack`, `bgBrightRed`, `bgBrightGreen`,
 *   `bgBrightYellow`, `bgBrightBlue`, `bgBrightMagenta`, `bgBrightCyan`, `bgBrightWhite`
 *
 * @param colors Array of color/style names to apply.
 */
export function color(colors: string[]): string;
/**
 * Returns the escape sequence to set the specified terminal display attributes (colors and styles).
 * @param colors Color/style names to apply.
 */
export function color(...colors: string[]): string;
