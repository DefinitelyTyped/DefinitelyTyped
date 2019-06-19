/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';
import { BaseInputProps, StatefulContainer, STATE_CHANGE_TYPE, SIZE, StatefulContainerProps } from '../input';

export interface TextareaProps extends BaseInputProps<HTMLTextAreaElement> {
  rows?: number;
}

export class Textarea extends React.Component<TextareaProps> {}

export type StatefulTextareaProps = TextareaProps & StatefulContainerProps & { children?: never; };

export const StatefulTextarea: React.FC<StatefulTextareaProps>;

export { StatefulContainer };

export const StyledTextareaContainer: StyletronComponent<any>;
export const StyledTextarea: StyletronComponent<any>;
