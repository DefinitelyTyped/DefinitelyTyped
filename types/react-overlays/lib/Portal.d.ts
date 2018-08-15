import * as React from 'react';

declare class Portal extends React.Component<Portal.PortalProps> { }
export = Portal;

declare namespace Portal {
  interface PortalProps {
    container?: React.ReactNode | Function;
  }
}
