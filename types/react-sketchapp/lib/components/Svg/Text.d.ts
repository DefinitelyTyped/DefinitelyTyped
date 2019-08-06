import React = require('react');

import { TextProps } from './props';

export { TextProps };

export default class Text extends React.Component<TextProps> {
    getChildContext(): { isInAParentText: boolean };
}
