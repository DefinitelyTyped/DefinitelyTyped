import { Locale } from '@ckeditor/ckeditor5-utils';
import InputView from '../input/inputview';

/**
 * The number input view class.
 */
export default class InputNumberView extends InputView {
    /**
     * Creates an instance of the input number view.
     */
    constructor(locale: Locale, options?: { min?: number; max?: number; step?: number });

    /**
     * The value of the `min` DOM attribute (the lowest accepted value) set on the {@link #element}.
     */
    get min(): undefined | number;
    protected set min(v: number | undefined);

    /**
     * The value of the `max` DOM attribute (the highest accepted value) set on the {@link #element}.
     */
    get max(): undefined | number;
    protected set max(v: number | undefined);

    /**
     * The value of the `step` DOM attribute set on the {@link #element}.
     */
    get step(): undefined | number;
    protected set step(v: number | undefined);
}
