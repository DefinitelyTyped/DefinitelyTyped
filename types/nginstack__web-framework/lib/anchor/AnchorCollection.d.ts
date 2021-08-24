export = AnchorCollection;
declare function AnchorCollection(attachedTo: any, process: Process): void;
declare class AnchorCollection {
    constructor(attachedTo: any, process: Process);
    process: import('../process/Process');
    private attachedTo_;
    anchors: any[];
    private pairName_;
    private cssClass;
    private written_;
    size: number;
    private addAnchor_;
    add(anchor: Anchor | Anchor[]): void;
    clear(): void;
    private getHtml;
    private getImgHtml;
    private write;
    private getParameters;
    private getParametersValues;
    private createParametersInfo;
    private convertParametersToParams;
    private setParameterForAllAnchors;
    private clone;
    private assign;
    formatHtml(
        content: string,
        parameterValues: any[],
        opt_options?: {
            cssClass?: string;
            key?: number;
            bookmark?: string;
        }
    ): string;
    private anchorToMenuItem_;
    private act_showMenu_;
}
declare namespace AnchorCollection {
    export { Process, Anchor };
}
type Process = import('../process/Process');
type Anchor = import('./Anchor');
