import * as React from 'react';

declare class Clearfix extends React.Component<ClearfixProps> { }
declare namespace Clearfix { }
export = Clearfix

interface ClearfixProps extends React.HTMLProps<Clearfix> {
  componentClass?: React.ReactType,
  visibleXsBlock?: boolean;
  visibleSmBlock?: boolean;
  visibleMdBlock?: boolean;
  visibleLgBlock?: boolean;
}
