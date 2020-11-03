declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            selectedValue: string;
            group: string;
            items: ({
                id: string;
                value: string;
                label: string;
                disabled?: undefined;
            } | {
                id: string;
                value: string;
                label: string;
                disabled: boolean;
            })[];
            direction?: undefined;
            vertical?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            direction: string;
            selectedValue: string;
            group: string;
            items: ({
                id: string;
                value: string;
                label: string;
                disabled?: undefined;
            } | {
                id: string;
                value: string;
                label: string;
                disabled: boolean;
            })[];
            vertical?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            selectedValue: string;
            group: string;
            vertical: boolean;
            items: ({
                id: string;
                value: string;
                label: string;
                disabled?: undefined;
            } | {
                id: string;
                value: string;
                label: string;
                disabled: boolean;
            })[];
            direction?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            direction: string;
            selectedValue: string;
            group: string;
            vertical: boolean;
            items: ({
                id: string;
                value: string;
                label: string;
                disabled?: undefined;
            } | {
                id: string;
                value: string;
                label: string;
                disabled: boolean;
            })[];
        };
    })[];
};
export default _default;
