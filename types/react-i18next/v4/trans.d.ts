import * as React from "react";

export interface TransProps {
    i18nKey?: string;
    [name: string]: any;
}

export default class Trans extends React.Component<TransProps> { }
