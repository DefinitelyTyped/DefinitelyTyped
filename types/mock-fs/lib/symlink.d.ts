import Item = require('./item');

export = SymbolicLink;

declare class SymbolicLink extends Item {
    /** Sets the path (relative) to the source. */
    setPath(pathname: string): void;
    /** Get the path (relative) to the source. */
    getPath(): string;
    /** Get symbolic link stats. */
    getStats(): Item.ExtendedStats;
}
