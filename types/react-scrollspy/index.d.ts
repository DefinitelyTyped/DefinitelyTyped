// Type definitions for react-scrollspy 3.3
// Project: https://github.com/makotot/react-scrollspy
// Definitions by: Zhang Yi Jiang <https://github.com/ZhangYiJiang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface ScrollspyProps {
    // Array of target element IDs
    items: ReadonlyArray<string>;

    // Class name that apply to the navigation element paired with the content element in viewport
    currentClassName: string;

    // Class name that apply to the navigation elements that have been scrolled past
    scrolledPastClassName?: string;

    // HTML tag for Scrollspy component if you want to use other than ul
    componentTag?: string | React.ComponentType;

    // Style attribute to be passed to the generated <ul /> element
    style?: React.CSSProperties;

    // Offset value that adjusts to determine the elements are in the viewport
    offset?: number;

    // Selector for the element of scrollable container that can be used with querySelector
    rootEl?: string;

    // Function to be executed when the active item has been updated
    onUpdate?: (item: string) => void;

    // ClassName attribute to be passed to the generated <ul /> element
    className?: string;
}

export default class Scrollspy extends React.Component<ScrollspyProps> {
    // Add event listener of scrollspy.
    onEvent(): void;

    // Remove event listener of scrollspy.
    offEvent(): void;
}
