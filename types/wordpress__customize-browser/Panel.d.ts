import { Container, Container_Arguments } from "./Container";
import { Section } from "./Section";

export class Panel extends Container {
    embed(): void;
    attachEvents(): void;
    sections(): Section[];
    isContextuallyActive(): boolean;
    onChangeExpanded(expanded: boolean, args: Container_Arguments): void;
    renderContent(): void;
}
