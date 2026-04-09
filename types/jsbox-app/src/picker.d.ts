// JSBox Picker API TypeScript Declaration

interface JBPicker {
    date(args?: {
        props: {
            date?: Date;
            min?: Date;
            max?: Date;
            mode?: number;
            interval?: number;
        };
    }): Promise<Date>;
    date(args?: {
        props: {
            date?: Date;
            min?: Date;
            max?: Date;
            mode?: number;
            interval?: number;
        };
        handler: (date: Date) => void;
    }): void;
    data(args: {
        props: {
            items: any[];
        };
    }): Promise<string[]>;
    data(args: {
        props: {
            items: any[];
        };
        handler: (data: string[]) => void;
    }): void;
    color(args?: { color: UIColor }): Promise<UIColor>; // The parameter is the default color
    color(args?: { color: UIColor; handler: (color: UIColor) => void }): void;
}

declare const $picker: JBPicker;
