interface RenderProperties {
    getEncodedQuery(): string;
    getListControl(): any;
    getParameters(): string[];
    getParameterValue(value: string): string;
    getReferringURL(): string;
    getViewName(): string;
    getWindowProperties(): any;
    isInDevStudio(): boolean;
    isInteractive(): boolean;
    isManyToMany(): boolean;
    isRelatedList(): boolean;
}
