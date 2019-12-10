import * as React from 'react';
import WixComponent, { WixComponentProps } from './BaseComponents';

export interface LoaderProps extends WixComponentProps {
    size?: LoaderSize;
    color?: LoaderColor;
    text?: React.ReactNode;
    status?: LoaderStatus;
    statusMessage?: string;
    shouldLoadAsync?: boolean;
}

export default class Loader extends WixComponent<LoaderProps> {}

export type LoaderSize = 'tiny' | 'small' | 'medium' | 'large';

export type LoaderColor = 'blue' | 'white';

export type LoaderStatus = 'loading' | 'success' | 'error';
