declare namespace focusWithin {
    interface FocusWithinOpts {
        attr?: boolean | undefined;
        className?: string | undefined;
    }
}

declare function focusWithin(document: HTMLDocument, opts?: focusWithin.FocusWithinOpts): void;

export as namespace focusWithin;
export = focusWithin;
