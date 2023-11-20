import chalk from "chalk";

/**
 * 🌈 Create chalk-style schemes with simpler style strings.
 * @param stylePipe Use a dot `.` to separate multiple styles.
 */
declare function chalkPipe<T extends typeof chalk = typeof chalk>(
    stylePipe: string,
    customChalk?: T,
): T;

export = chalkPipe;
