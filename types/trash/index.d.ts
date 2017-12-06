// Type definitions for trash 4.2
// Project: https://github.com/sindresorhus/trash#readme
// Definitions by: Matthew James <https://github.com/matthew-matvei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "trash" {

    interface TrashOptions {
        glob: boolean;
    }

    function trash(iterable: Iterable<string>, opts?: TrashOptions): Promise<void>;

    export default trash;
}
