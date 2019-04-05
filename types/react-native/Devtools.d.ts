declare module "react-native/Libraries/Core/Devtools/parseErrorStack" {
    export type StackFrame = {
        file: string;
        methodName: string;
        lineNumber: number;
        column: number | null;
    };

    export interface ExtendedError extends Error {
        framesToPop?: number;
    }

    export default function parseErrorStack(error: ExtendedError): StackFrame[];
}

declare module "react-native/Libraries/Core/Devtools/symbolicateStackTrace" {
    import { StackFrame } from "react-native/Libraries/Core/Devtools/parseErrorStack";

    export default function symbolicateStackTrace(stack: ReadonlyArray<StackFrame>): Promise<StackFrame[]>;
}
