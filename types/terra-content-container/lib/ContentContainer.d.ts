import * as React from "react";

export interface ContentContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The header element to be placed within the header area of the container.
     */
    header?: React.ReactNode | undefined;
    /**
     * The footer element to be placed within the footer area of the container.
     */
    footer?: React.ReactNode | undefined;
    /**
     * Whether or not the container should expanded to fill its parent element.
     */
    fill?: boolean | undefined;
    /**
     * Ref callback for the scrollable area of the content container.
     */
    scrollRefCallback?: React.Ref<HTMLDivElement> | undefined;
}

declare const ContentContainer: React.FC<ContentContainerProps>;
export default ContentContainer;
