declare function nwmatcher(global: { document: Document }): nwmatcher.Matcher;

declare namespace nwmatcher {
    interface Matcher {
        // DOM Selection

        first: (selector: string, context?: Element) => Element | null;
        match: (element: Element, selector: string, context?: Element) => boolean;
        select: (selector: string, context?: Element, callback?: (element: Element) => void) => Element[];

        // DOM Helpers

        byId: (id: string, from?: Element) => Element | null;
        byTag: (tag: string, from?: Element) => Element[];
        byClass: (className: string, from?: Element) => Element[];
        byName: (name: string, from?: Element) => Element[];
        getAttribute: (element: Element, attribute: string) => string | undefined;
        hasAttribute: (element: Element, attribute: string) => boolean;
    }
}

declare global {
    namespace NW {
        const Dom: nwmatcher.Matcher;
    }
}

export = nwmatcher;
