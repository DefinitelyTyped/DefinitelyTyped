export = ButtonTimer;
declare function ButtonTimer(button: any): void;
declare class ButtonTimer {
    constructor(button: any);
    button: any;
    interval: number;
    enabled: boolean;
    toString(): string;
    private propertiesToSync_;
}
