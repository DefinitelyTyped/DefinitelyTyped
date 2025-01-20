// This class is not intended to be directly constructable.
declare class _TemplateOnlyComponent {
    // Type brand to simulate a nominal type.
    declare private brand: "TemplateOnlyComponent";
    toString(): string;
}

// Export an interface instead to prevent construction.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TemplateOnlyComponent extends _TemplateOnlyComponent {}

export default function templateOnly(moduleName?: string): TemplateOnlyComponent;

// Shut off automatic exporting.
export {};
