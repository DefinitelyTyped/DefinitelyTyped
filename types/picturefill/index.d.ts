declare namespace Picturefill {
    type ElementNullable = Element | null;

    interface EvaluateArg {
        reevaluate?: boolean | undefined;
        elements: NodeList | ElementNullable[];
    }
}

declare function picturefill(arg?: Picturefill.EvaluateArg): void;

export = picturefill;
export as namespace picturefill;
