export = LayoutManager;
declare function LayoutManager(output: { write: (arg0: string) => any }): void;
declare class LayoutManager {
    constructor(output: { write: (arg0: string) => any });
    private output_;
    private started_;
    private colStarted_;
    private rowStarted_;
    currentRow_: number;
    private lastColumn_;
    enabled: boolean;
    begin(): void;
    end(): void;
    add(item: LayoutComponent): void;
}
declare namespace LayoutManager {
    export { LayoutComponent };
}
interface LayoutComponent {
    layout?: LayoutConfig;
}
import LayoutConfig = require("./LayoutConfig.js");
