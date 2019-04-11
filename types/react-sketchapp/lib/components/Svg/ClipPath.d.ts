import React = require('react');

export interface ClipPathProps {
    id: string;
    children?: React.ReactChild[] | React.ReactChild;
}

export default class ClipPath extends React.Component<ClipPathProps> {}
