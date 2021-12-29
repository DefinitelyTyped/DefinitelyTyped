import * as React from 'react';
import { TextIntrinsicProps } from './Text';

export * from './Text';
export * from './TextDirection';

export declare const Label: React.FC<Omit<TextIntrinsicProps<'label'>, 'as'>>;
export declare const Legend: React.FC<Omit<TextIntrinsicProps<'legend'>, 'as'>>;
