/// <reference types="react" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CalloutColors, CalloutSizes } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Callout component.
 * http://foundation.zurb.com/sites/docs/callout.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Callout: React.StatelessComponent<CalloutProps>;
export interface CalloutProps extends FlexboxPropTypes, ReactDOM.HTMLAttributes<HTMLDivElement> {
    color?: CalloutColors;
    size?: CalloutSizes;
}
