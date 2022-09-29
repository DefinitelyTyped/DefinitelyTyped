export class KeyInfo {
    constructor(nativeEvent: KeyboardEvent);
    keyCode: number;
    code: string;
    char: string;
    shiftKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
}
