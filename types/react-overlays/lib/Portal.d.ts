import * as React from 'react';

declare class Portal extends React.Component<Portal.PortalProps> { render(): React.ReactNode }
export = Portal;

declare namespace Portal {
  interface PortalProps {
    container?: React.ReactNode | Function;
  }
}
