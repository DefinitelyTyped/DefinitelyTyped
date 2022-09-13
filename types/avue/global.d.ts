declare module 'vue' {
    interface GlobalComponents {
        AvueCrud: typeof import('@smallwei/avue').AvueCrud;
        AvueForm: typeof import('@smallwei/avue').AvueForm;
        AvueTree: typeof import('@smallwei/avue').AvueTree;
    }
    interface ComponentCustomProperties {
        $ImagePreview: (list: { url?: string; thumbUrl?: string }[], index?: number) => void;
    }
}

export {};
