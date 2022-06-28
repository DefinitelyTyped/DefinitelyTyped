/// <reference types="react" />
import * as React from 'react';
import { CalloutColors, CalloutSizes } from '../enums';
import { FlexboxPropTypes } from '../utils';
/**
 * Callout component.
 * http://foundation.zurb.com/sites/docs/callout.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export declare const Callout: React.FunctionComponent<CalloutProps>;
export interface CalloutProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
    color?: CalloutColors | undefined;
    size?: CalloutSizes | undefined;
}
