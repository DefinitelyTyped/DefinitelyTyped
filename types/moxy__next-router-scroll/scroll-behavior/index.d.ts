/// <reference types="node" />
/// <reference lib="dom" />

export default class NextScrollBehavior extends ScrollBehavior<Location & LocationBase, NextScrollBehaviorContext> {
    constructor(shouldUpdateScroll: ShouldUpdateScroll<NextScrollBehaviorContext>);
    _context: NextScrollBehaviorContext;
    _prevContext: NextScrollBehaviorContext;
    _debounceSavePositionMap: Map<string, ScrollPosition>;
    _setScrollRestoration: () => void;
    _createContext(): NextScrollBehaviorContext;
    _setScrollRestorationWithoutUserAgentSniffing(): void;
    _oldScrollRestoration: ScrollRestoration;
    _savePosition(key: string, element: HTMLElement): void;
    _cleanupDebouncedSavePosition(): void;
}
import { Location } from "history";
import { ParsedUrlQuery } from "querystring";
import ScrollBehavior, { LocationBase, ScrollPosition, ShouldUpdateScroll } from "scroll-behavior";

export interface NextScrollBehaviorContext {
    location: Location & LocationBase;
    router: {
        pathname: string;
        asPath: string;
        query: ParsedUrlQuery;
    };
}
