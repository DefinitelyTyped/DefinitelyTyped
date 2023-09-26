import * as React from "react";

export interface ScrollspyProps {
    children?: React.ReactNode;

    // Array of target element IDs
    items: ReadonlyArray<string>;

    // Class name that apply to the navigation element paired with the content element in viewport
    currentClassName: string;

    // Class name that apply to the navigation elements that have been scrolled past
    scrolledPastClassName?: string | undefined;

    // HTML tag for Scrollspy component if you want to use other than ul
    componentTag?: string | React.ComponentType | undefined;

    // Style attribute to be passed to the generated <ul /> element
    style?: React.CSSProperties | undefined;

    // Offset value that adjusts to determine the elements are in the viewport
    offset?: number | undefined;

    // Selector for the element of scrollable container that can be used with querySelector
    rootEl?: string | undefined;

    // Function to be executed when the active item has been updated
    onUpdate?: ((item: HTMLElement) => void) | undefined;

    // ClassName attribute to be passed to the generated <ul /> element
    className?: string | undefined;
}

export default class Scrollspy extends React.Component<ScrollspyProps> {
    // Add event listener of scrollspy.
    onEvent(): void;

    // Remove event listener of scrollspy.
    offEvent(): void;
}
