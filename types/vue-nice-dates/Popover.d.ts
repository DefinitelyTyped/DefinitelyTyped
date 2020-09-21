import { VueConstructor } from 'vue';

export const Popover: Popover;

export interface Popover extends VueConstructor {
    props: {
        [propName: string]: boolean;
    };
}
