import * as React from 'react';

import { BlockActionFooterProps } from './BlockActionFooter';

export interface ActionFooterProps extends BlockActionFooterProps {
  /**
   * Actions to be displayed in the start socket
   */
  start?: React.ReactNode;
  /**
   * Actions to be displayed in the end socket
   */
  end?: React.ReactNode;
}

declare const ActionFooter: React.FC<ActionFooterProps>;
export default ActionFooter;
