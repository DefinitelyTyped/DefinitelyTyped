declare const _default: {
    context: {
        prefix: any;
    };
    variants: ({
        name: string;
        label: string;
        context: {
            items: ({
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                selected: boolean;
                disabled?: undefined;
            } | {
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                selected?: undefined;
                disabled?: undefined;
            } | {
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                disabled: boolean;
                selected?: undefined;
            })[];
            container?: undefined;
        };
    } | {
        name: string;
        label: string;
        context: {
            container: boolean;
            items: ({
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                selected: boolean;
                disabled?: undefined;
            } | {
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                selected?: undefined;
                disabled?: undefined;
            } | {
                linkId: string;
                panelId: string;
                panelClass: string;
                label: string;
                panelContent: string;
                disabled: boolean;
                selected?: undefined;
            })[];
        };
    })[];
};
export default _default;
