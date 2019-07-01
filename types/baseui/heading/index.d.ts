/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { BlockProps } from '../block';

export interface HeadingLevelProps {
  children: React.ReactNode;
}

export const HeadingLevel: React.FC<HeadingLevelProps>;

export type HeadingProps = {
  styleLevel?: number;
} & BlockProps;

export const Heading: React.FC<HeadingProps>;
