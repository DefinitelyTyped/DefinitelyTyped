// Definitions by: Foup <https://github.com/foupp>

declare class QuickBoard {
    constructor(options: {
        max: number,
        data: any[],
        map: (...args: any[]) => void,
        sort: (...args: any[]) => void,
        reverse?: boolean
    });
    create(): string;

    init(): string;

    template(): string;

    get(key: string): any;

    set(key: string, value: string | any[] | number | boolean | ((...args: any[]) => void)): any;
}

export default QuickBoard;
