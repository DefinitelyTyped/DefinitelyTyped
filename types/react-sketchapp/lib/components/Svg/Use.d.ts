import React = require('react');

import { PathProps, NumberProp } from './props';

export interface UseProps extends PathProps {
    href: string;
    width?: NumberProp; // Just for reusing `Symbol`
    height?: NumberProp; //  Just for reusing `Symbol`
}

export default class Use extends React.Component<UseProps> {}
