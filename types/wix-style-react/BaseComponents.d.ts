import * as React from 'react';

export interface WixComponentProps {
    dataHook?: string;
    styles?: string;
}

export default class WixComponent<T extends WixComponentProps = {}> extends React.PureComponent<T> {}
