import '../../';

export interface Ruler {
    column: number;
    className?: string | undefined;
    color?: string | undefined;
    lineStyle?: string | undefined;
    width?: string | undefined;
}

declare module '../../' {
    interface EditorConfiguration {
        /** show one or more vertical rulers in the editor. */
         rulers?: false | ReadonlyArray<number | Ruler> | undefined;
    }
}
