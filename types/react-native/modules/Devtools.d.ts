declare module "react-native/Libraries/Core/Devtools/parseErrorStack" {
    export type StackFrame = {
        file: string;
        methodName: string;
        lineNumber: number;
        column: number | null;
    };

    export interface ExtendedError extends Error {
        framesToPop?: number | undefined;
    }

    export default function parseErrorStack(error: ExtendedError): StackFrame[];
}

declare module "react-native/Libraries/Core/Devtools/symbolicateStackTrace" {
    import { StackFrame } from "react-native/Libraries/Core/Devtools/parseErrorStack";

    export default function symbolicateStackTrace(
        stack: readonly StackFrame[],
    ): Promise<StackFrame[]>;
}
