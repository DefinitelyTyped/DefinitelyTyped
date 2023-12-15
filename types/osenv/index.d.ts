/**
 * The machine name. Calls hostname if not found.
 */
export function hostname(cb?: (hostname: string, error?: string) => void): string;

/**
 * The currently logged-in user. Calls whoami if not found.
 */
export function user(cb?: (user: string, error?: string) => void): string;

/**
 * Either PS1 on unix, or PROMPT on Windows.
 */
export function prompt(cb?: (prompt: string, error?: string) => void): string;

/**
 * The place where temporary files should be created.
 */
export function tmpdir(cb?: (tmpdir: string, error?: string) => void): string;

/**
 * No place like it.
 */
export function home(cb?: (home: string, error?: string) => void): string;

/**
 * An array of the places that the operating system will search for executables.
 */
export function path(cb?: (path: string, error?: string) => void): string;

/**
 * Return the executable name of the editor program.
 * This uses the EDITOR and VISUAL environment variables,
 * and falls back to vi on Unix, or notepad.exe on Windows.
 */
export function editor(cb?: (editor: string, error?: string) => void): string;

/**
 * The SHELL on Unix, which Windows calls the ComSpec.
 * Defaults to 'bash' or 'cmd'.
 */
export function shell(cb?: (shell: string, error?: string) => void): string;
