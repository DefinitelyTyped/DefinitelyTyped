import * as React from 'react';

export interface LocalizedProps {
    id: string;
    attrs?: object;
    [key: string]: any;
}

export default class Localized extends React.Component<LocalizedProps> {}
