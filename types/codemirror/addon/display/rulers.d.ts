import '../../';

export interface Ruler {
    column: number;
    className?: string;
    color?: string;
    lineStyle?: string;
    width?: string;
}

declare module '../../' {
    interface EditorConfiguration {
        /** show one or more vertical rulers in the editor. */
         rulers?: false | ReadonlyArray<number | Ruler>;
    }
}
