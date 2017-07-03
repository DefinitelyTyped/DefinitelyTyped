import * as React from "react";

export interface TransProps {
    i18nKey?: string;
    count: number;
}

export default class Trans extends React.Component<TransProps> { }
