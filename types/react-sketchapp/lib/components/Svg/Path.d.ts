import React = require('react');

import { PathProps as DefaultPathProps } from './props';

export interface PathProps extends DefaultPathProps {
    d: string;
}

export default class Path extends React.Component<PathProps> {}
