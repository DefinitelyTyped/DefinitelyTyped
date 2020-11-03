declare const _default: {
    context: {
        prefix: any;
        default: {
            idSuffix: string;
        };
        helper: {
            idSuffix: string;
        };
        disabled: {
            idSuffix: string;
        };
        invalid: {
            idSuffix: string;
        };
    };
    variants: ({
        name: string;
        label: string;
        notes: string;
        context: {
            items: {
                label: string;
                value: string;
            }[];
            light?: undefined;
            up?: undefined;
            inline?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            items: {
                label: string;
                value: string;
            }[];
            up?: undefined;
            inline?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            up: boolean;
            items: {
                label: string;
                value: string;
            }[];
            light?: undefined;
            inline?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            up: boolean;
            light: boolean;
            items: {
                label: string;
                value: string;
            }[];
            inline?: undefined;
        };
        notes?: undefined;
    } | {
        name: string;
        label: string;
        context: {
            inline: boolean;
            items: {
                label: string;
                value: string;
            }[];
            light?: undefined;
            up?: undefined;
        };
        notes?: undefined;
    })[];
};
export default _default;
