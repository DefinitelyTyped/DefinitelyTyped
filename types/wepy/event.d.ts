export default class event {
    active: boolean;
    constructor(name: string, source: any, type: any);
    $destroy(): void;
    $transfor(wxevent: any[]): void;
}
