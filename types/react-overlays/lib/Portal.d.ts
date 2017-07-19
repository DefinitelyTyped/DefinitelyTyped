import * as React from 'react';

export interface PortalProps {
  container?: React.ReactNode | Function;
}

export default class Portal extends React.Component<PortalProps> { }
