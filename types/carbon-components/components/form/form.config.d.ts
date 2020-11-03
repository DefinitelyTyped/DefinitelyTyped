declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            selectItems: ({
                label: string;
                disabled: boolean;
                selected: boolean;
                hidden: boolean;
                value?: undefined;
                items?: undefined;
            } | {
                label: string;
                value: string;
                disabled?: undefined;
                selected?: undefined;
                hidden?: undefined;
                items?: undefined;
            } | {
                label: string;
                items: {
                    label: string;
                    value: string;
                }[];
                disabled?: undefined;
                selected?: undefined;
                hidden?: undefined;
                value?: undefined;
            })[];
            light?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            selectItems: ({
                label: string;
                disabled: boolean;
                selected: boolean;
                hidden: boolean;
                value?: undefined;
                items?: undefined;
            } | {
                label: string;
                value: string;
                disabled?: undefined;
                selected?: undefined;
                hidden?: undefined;
                items?: undefined;
            } | {
                label: string;
                items: {
                    label: string;
                    value: string;
                }[];
                disabled?: undefined;
                selected?: undefined;
                hidden?: undefined;
                value?: undefined;
            })[];
        };
        notes?: undefined;
    })[];
};
export default _default;
