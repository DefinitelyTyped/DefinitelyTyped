// Type definitions for chalk-pipe 2.0
// Project: https://github.com/LitoMore/chalk-pipe
// Definitions by: Jed Mao <https://github.com/jedmao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import chalk from 'chalk';

/**
 * 🌈 Create chalk-style schemes with simpler style strings.
 * @param stylePipe Use a dot `.` to separate multiple styles.
 */
declare function chalkPipe<T extends typeof chalk = typeof chalk>(
    stylePipe: string,
    customChalk?: T,
): T;

export = chalkPipe;
