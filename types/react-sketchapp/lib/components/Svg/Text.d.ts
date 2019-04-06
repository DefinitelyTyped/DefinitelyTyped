import React from 'react';

import { TextProps as DefaultTextProps } from './props';

export interface TextProps extends DefaultTextProps {}

export default class Text extends React.Component<TextProps> {
    getChildContext(): { isInAParentText: boolean };
}
