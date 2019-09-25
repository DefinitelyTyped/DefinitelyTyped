import React = require('react');

export interface ClipPathProps {
    id: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export default class ClipPath extends React.Component<ClipPathProps> {}
