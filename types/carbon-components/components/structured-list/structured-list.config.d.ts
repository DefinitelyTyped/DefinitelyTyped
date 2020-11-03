declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            columns: ({
                name: string;
                title: string;
                nowrap: boolean;
            } | {
                name: string;
                title: string;
                nowrap?: undefined;
            })[];
            rows: ({
                selected: boolean;
                id: string;
                value: string;
                selectionLabel: string;
                column1: string;
                column2: string;
            } | {
                id: string;
                value: string;
                selectionLabel: string;
                column1: string;
                column2: string;
                selected?: undefined;
            })[];
            selectable?: undefined;
            group?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            columns: ({
                name: string;
                title: string;
                nowrap: boolean;
            } | {
                name: string;
                title: string;
                nowrap?: undefined;
            })[];
            rows: ({
                selected: boolean;
                id: string;
                value: string;
                selectionLabel: string;
                column1: string;
                column2: string;
            } | {
                id: string;
                value: string;
                selectionLabel: string;
                column1: string;
                column2: string;
                selected?: undefined;
            })[];
            selectable: boolean;
            group: string;
        };
    })[];
};
export default _default;
