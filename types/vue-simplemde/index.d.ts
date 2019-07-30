// Type definitions for vue-simplemde 1.0
// Project: https://github.com/F-loat/vue-simplemde#readme
// Definitions by: nomnes <https://github.com/NomNes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { VueConstructor } from 'vue';
import { Options as SimpleMdeOptions } from 'simplemde';

export default VueSimpleMde;
export const VueSimpleMde: VueSimpleMdeConstructor;

interface VueSimpleMdeProps {
    value: string;
    name: string;
    previewClass: string;
    autoinit: boolean;
    highlight: boolean;
    sanitize: boolean;
    configs: SimpleMdeOptions;
}

export interface VueSimpleMdeWatch {
    value(val: string): void;
}

export interface VueSimpleMdeMethods {
    initialize(): void;
    bindingEvents(): void;
    addPreviewClass(className: string): void;
}

export interface VueSimpleMdeConstructor extends VueConstructor {
    props: VueSimpleMdeProps;
    data: () => {};
    watch: VueSimpleMdeWatch;
    methods: VueSimpleMdeMethods;
    computed: {};
}
