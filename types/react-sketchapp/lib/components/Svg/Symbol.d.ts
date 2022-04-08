import React = require('react');

export interface SymbolProps {
    id: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    children: React.ReactNode[] | React.ReactNode;
}

export default class Symbol extends React.Component<SymbolProps> {}
