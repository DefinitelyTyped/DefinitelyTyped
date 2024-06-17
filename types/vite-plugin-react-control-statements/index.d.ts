import type { ReactNode } from "react";

declare global {
    /** Render conditionally based on the condition prop */
    function If(props: {
        condition: boolean;
        children: ReactNode;
    }): any;
    /** Container component for When/Otherwise components */
    function Choose(props: {
        children: ReactNode;
    }): any;
    /** Render conditionally based on the condition prop inside a Choose component */
    function When(props: {
        condition: boolean;
        children: ReactNode;
    }): any;
    /** Render conditionally as the default case inside a Choose component */
    function Otherwise(props: {
        children: ReactNode;
    }): any;
}

export {};
