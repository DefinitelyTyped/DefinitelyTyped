import React = require('react');

import { TextProps as TSpanProps } from './props';

export { TSpanProps };
export default class TSpan extends React.Component<TSpanProps> {
    getChildContext(): { isInAParentText: boolean };
}
