import React from 'react';

export interface SymbolProps {
    id: string;
    viewBox?: string;
    preserveAspectRatio?: string;
    children: React.ReactChild[] | React.ReactChild;
}

export default class Symbol extends React.Component<SymbolProps> {}
