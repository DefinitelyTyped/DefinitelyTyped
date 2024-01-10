// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare global {
    interface Window {
        [propName: string]: unknown;
    }

    interface Document {
        [propName: string]: unknown;
    }

    interface Navigator {
        [propName: string]: unknown;
    }
}

export {};