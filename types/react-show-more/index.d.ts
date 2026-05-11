import * as React from "react";

declare namespace ReactShowMore {
    interface ReactShowMoreProps {
        /**
         * Specifies how many lines of text should be preserved until it gets truncated. false and
         * any integer < 1 will result in the text not getting clipped at all.
         *
         * @default false
         */
        lines?: number | false | undefined;

        /**
         * The text to display in the anchor element to show more.
         *
         * @default "Show more"
         */
        more?: React.ReactNode | undefined;

        /**
         * The text to display in the anchor element to show less.
         *
         * @default "Show less"
         */
        less?: React.ReactNode | undefined;

        /**
         * The text to be truncated. Anything that can be evaluated as text.
         */
        children?: React.ReactNode | undefined;

        /**
         * Class name(s) to add to the anchor elements.
         *
         * @default ""
         */
        anchorClass?: string | undefined;
    }
}

declare class ReactShowMore extends React.Component<ReactShowMore.ReactShowMoreProps> {}
export = ReactShowMore;
