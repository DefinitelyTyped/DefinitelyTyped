// Type definitions for react-measure 0.4.0
// Project: https://github.com/souporserious/react-measure
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module "react-measure" {
    import * as React from "react";

    class Measure extends React.Component<Measure.MeasureProps> { }
    namespace Measure {
        type MeasurementType = "width" | "height" | "top" | "right" | "bottom" | "left";
        interface Dimensions {
            width?: number;
            height?: number;
            top?: number;
            right?: number;
            bottom?: number;
            left?: number;
        }

        type MeasureChildren = React.ReactElement<any> | { (dimension: Dimensions): React.ReactElement<any> };

        interface MeasureProps {
            /**
             * Tries to give the most accurate measure. Currently only works with height.
             * Measures the content rather than the actual box of the element.
             */
            accurate?: boolean;
            /**
             * Provide a list of properties to fire a callback for.
             */
            whitelist?: MeasurementType[];
            /**
             * Like whitelist, but will not fire a callback for the specified properties.
             */
            blacklist?: MeasurementType[];
            /**
             * Determines whether or not a measurement should occur.
             * @default true
             */
            shouldMeasure?: boolean;
            /**
             * Callback when the component has been mutated. Receives dimensions, mutations, and anything passed to shouldMeasure.
             */
            onMeasure?: (dimensions: Dimensions) => void;
            /**
             * Children, ordinary JSX element or function. Leaving it for reference here
             */
            children?: MeasureChildren;
        }
    }
    export = Measure;

}
