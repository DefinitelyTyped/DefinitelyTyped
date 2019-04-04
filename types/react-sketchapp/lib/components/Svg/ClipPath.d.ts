import React from 'react';

export interface ClipPathProps {
  id: string;
  children?: React.ReactChild[];
}

export default class ClipPath extends React.Component<ClipPathProps> {}
