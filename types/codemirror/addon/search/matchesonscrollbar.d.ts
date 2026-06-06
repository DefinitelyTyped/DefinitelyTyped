import "../..";
import "./searchcursor";

export interface SearchAnnotation {
    clear(): void;
}

declare module "../../" {
    interface Editor {
        showMatchesOnScrollbar(query: string | RegExp, caseFold?: boolean, className?: string): SearchAnnotation;
    }
}
