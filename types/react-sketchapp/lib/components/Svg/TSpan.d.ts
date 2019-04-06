import React from 'react';

import { TextProps } from './props';

export interface TSpanProps extends TextProps {}

export default class TSpan extends React.Component<TSpanProps> {
    getChildContext(): { isInAParentText: boolean };
}
