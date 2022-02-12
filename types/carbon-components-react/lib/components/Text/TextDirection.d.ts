import * as React from 'react';
import { TextDirection } from './TextDirectionContext';

export interface TextDirectionProps {
    children?: React.ReactNode | undefined;
    dir?: TextDirection | undefined;
    getTextDirection?: ((...args: any[]) => TextDirection | null | undefined) | undefined;
}

export declare const TextDirection: React.FC<TextDirectionProps>;
