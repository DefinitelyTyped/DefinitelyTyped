import { ComponentType } from '@wordpress/element';

import BaseControl from '../base-control';

declare namespace FocalPointPicker {
    interface Props extends BaseControl.ControlProps {
        /**
         * URL of the image to be displayed.
         */
        url: string;
        /**
         * The focal point.
         */
        value: FocalPoint;
        /**
         * Callback which is called when the focal point changes.
         */
        onChange(value: FocalPoint): void;
    }
    interface FocalPoint {
        /**
         * Fractional percent from LTR of image (Range 0 to 1).
         */
        x: number;
        /**
         * Fractional percent from TTB of image (Range 0 to 1).
         */
        y: number;
    }
}
declare const FocalPointPicker: ComponentType<FocalPointPicker.Props>;

export default FocalPointPicker;
