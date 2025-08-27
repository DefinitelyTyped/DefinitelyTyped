import { AllowedComponentProps, ComponentCustomProps, VNode, VNodeProps } from "vue";

/**
 * VueWriter is a Vue 3 component that simulates typing, and erasing text.
 */
declare class VueWriter extends ClassComponent<VueWriterProps, VueWriterSlots> {}
export = VueWriter;

interface VueWriterProps {
    /**
     * Target string to have the effect.
     * This prop has to be in an array even if it's a single string.
     */
    array: string[];
    /**
     * Higher the number, slower the typing speed is.
     * - Defaults to 200
     */
    typeSpeed?: number | undefined;
    /**
     * Controls how fast each character is erased in second intervals.
     * - Defaults to 100
     */
    eraseSpeed?: number | undefined;
    /**
     * Controls how long the current word in the array will appear on the screen before it deletes and begins typing the next word.
     * - Defaults to 2000 (ms)
     */
    delay?: number | undefined;
    /**
     * Controls how long the next word in the array will appear after the previous word is fully erased.
     * - Defaults to 500
     */
    intervals?: number | undefined;
    /**
     * This will loop through the array depending on the value you set.
     * - Defaults to 0
     *
     * Example:
     * ```
     *  0: it will loop forever
     *  1: it will go one time without erasing.
     * ```
     */
    iterations?: number | undefined;
    /**
     * Control when the animation should begin. By default when the component is loaded on the page, the animation will start.
     * - Defaults to 0
     */
    start?: number | undefined;
    /**
     * Changes the style of the caret.
     * - Defaults to 'cursor'
     */
    caret?: "cursor" | "underscore" | undefined;
}

interface VueWriterSlots {
    /**
     * - You can pass child components and nested HTML before this component is loaded.
     * - The children being passed will always come before the typewriter animation/effect.
     *
     * Example:
     *```vue
     *  <VueWriter :array="['World']">
            <span>Hello</span>
        </VueWriter>
        ```
     */
    default: () => VNode[];
}

declare class ClassComponent<Props, Slots> {
    $props: Props & PublicProps;
    $slots: Slots;
}
type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;
