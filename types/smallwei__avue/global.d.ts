declare module 'vue' {
    interface GlobalComponents {
        AvueCrud: typeof AvueCrud;
        AvueForm: typeof AvueForm;
        AvueTree: typeof AvueTree;
    }
    interface ComponentCustomProperties {
        $ImagePreview: (list: Array<{ url?: string; thumbUrl?: string }>, index?: number) => void;
    }
}

export {};
