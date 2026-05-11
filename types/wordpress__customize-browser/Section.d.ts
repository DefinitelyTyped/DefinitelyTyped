import { Container, Container_Arguments, Container_Params } from "./Container";
import { Control } from "./Control";
import { Value } from "./Value";

export interface Section_Params extends Container_Params {
    panel?: string | null | undefined;
    customizeAction?: string | undefined;
}

export class Section extends Container {
    containerParent: string;
    containerPaneParent: string;
    id: string;
    panel: Value<string>;
    initialize(id?: string, options?: Section_Params): void;
    embed(): void;
    attachEvents(): void;
    isContextuallyActive(): boolean;
    controls(): Control[];
    onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
}
