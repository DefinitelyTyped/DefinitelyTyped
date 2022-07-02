export = Button;
declare function Button(
    name: string,
    target: string | ((arg0: any) => any),
    processKey?: number,
    newTab?: boolean,
    ...args: any[]
): void;
declare class Button {
    constructor(
        name: string,
        target: string | ((arg0: any) => any),
        processKey?: number,
        newTab?: boolean,
        ...args: any[]
    );
    timer: ButtonTimer;
    private grid;
    private toString;
    private checkMandatoryVisible;
    changed: boolean;
    private getMandatoryVisible;
    visible: boolean;
    private hotKeyCharCode;
    private hotKeyCharPos;
    private setHotKeyCharPosByName;
    icon: number;
    disabledIcon: number;
    order: number;
    name: string;
    label: string;
    timeout: number;
    defaultAction: boolean;
    defaultButton: boolean;
    minSelectedRecords: number;
    maxSelectedRecords: number;
    enable(): void;
    enabled: boolean;
    disable(): void;
    hide(): void;
    show(): void;
    private setPropertiesDefaultValues;
    private getChanges;
    protected propertiesToSync_: string[];
}
import ButtonTimer = require('./ButtonTimer.js');
