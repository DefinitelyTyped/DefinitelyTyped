// Type definitions for markdown-navbar 1.4
// Project: https://github.com/parksben/markdown-navbar
// Definitions by: Luqman Rizal <https://github.com/drpsyko101>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MouseEvent } from 'react';

declare namespace MarkdownNavbar {
    interface MarkdownNavbarProps {
        /** The className that defines the outermost container of navbar */
        className?: string;
        /** Markdown text content */
        source: string;
        /** Anchor displacement relative to the top of the window (for the anchor jump) */
        headingTopOffset?: number;
        /** Automatically update the hash value of browser address when page scrolling if true */
        updateHashAuto?: boolean;
        /** Use the text of the title from Markdown content as the hash value for the anchor if true */
        declarative?: boolean;
        /** Whether the title contains a numerical prefix, such as: 1. 2. 2.2 */
        ordered?: boolean;
        /** The event callback function after clicking navbar item */
        onNavItemClick?: (event: MouseEvent<HTMLDivElement>, element: HTMLDivElement, hashValue: string) => void;
        /** The event callback function before the hash value of browser address changing */
        onHashChange?: (newHash: string, oldHash: string) => void;
    }
}

declare function MarkdownNavbar(options: MarkdownNavbar.MarkdownNavbarProps): JSX.Element;

export = MarkdownNavbar;
