/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface AvatarOverrides<T> {
  Avatar?: Override<T>;
  Initials?: Override<T>;
  Root?: Override<T>;
}

export interface StyleProps {
  $didImageFailToLoad: boolean;
  $size?: string;
}

export interface AvatarProps {
  name: string;
  overrides?: AvatarOverrides<StyleProps>;
  size?: string;
  src?: string;
}

export interface AvatarState {
  noImageAvailable: boolean;
}

export class Avatar extends React.Component<AvatarProps, AvatarState> {
  handleError(): void;
}

export const StyledAvatar: StyletronComponent<any>;
export const StyledInitials: StyletronComponent<any>;
export const StyledRoot: StyletronComponent<any>;
