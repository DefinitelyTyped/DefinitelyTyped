declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            items: ({
                id: string;
                label: string;
                selected: boolean;
            } | {
                id: string;
                label: string;
                selected?: undefined;
            })[];
            light?: undefined;
            inline?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            light: boolean;
            items: ({
                id: string;
                label: string;
                selected: boolean;
            } | {
                id: string;
                label: string;
                selected?: undefined;
            })[];
            inline?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            inline: boolean;
            items: ({
                id: string;
                label: string;
                selected: boolean;
            } | {
                id: string;
                label: string;
                selected?: undefined;
            })[];
            light?: undefined;
        };
    })[];
};
export default _default;
