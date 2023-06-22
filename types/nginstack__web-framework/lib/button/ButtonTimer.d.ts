export = ButtonTimer;
declare function ButtonTimer(button: Button): void;
declare class ButtonTimer {
    constructor(button: Button);
    button: import('./Button');
    interval: number;
    enabled: boolean;
    toString(): string;
    private propertiesToSync_;
}
declare namespace ButtonTimer {
    export { Button };
}
type Button = import('./Button');
