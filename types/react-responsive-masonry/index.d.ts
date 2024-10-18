import { CSSProperties, ReactElement, ReactNode } from "react";

export interface MasonryProps {
    children: ReactNode;
    /**
     * Injected by ResponsiveMasonry
     *
     * Default Value = 3
     */
    columnsCount?: number;
    /**
     * Margin surrounding each item e.g. "10px" or "1.5rem" (css gap property)
     *
     * Default Value = "0"
     */
    gutter?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ResponsiveMasonryProps {
    children: ReactNode;
    /**
     * A Object containing Keys as breakpoints in px and values as the columns count
     *
     * Default Value = { 350: 1, 750: 2, 900: 3 }
     */
    columnsCountBreakPoints?: {
        [key: number]: number;
    };
    className?: string;
    style?: CSSProperties;
}

export default function Masonry(props: MasonryProps): ReactElement;
export function ResponsiveMasonry(props: ResponsiveMasonryProps): ReactElement;
