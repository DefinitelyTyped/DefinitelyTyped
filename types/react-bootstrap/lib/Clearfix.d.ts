import * as React from 'react';

interface ClearfixProps extends React.HTMLProps<Clearfix> {
  componentClass?: React.ReactType,
  visibleXsBlock?: boolean;
  visibleSmBlock?: boolean;
  visibleMdBlock?: boolean;
  visibleLgBlock?: boolean;
}

export default class Clearfix extends React.Component<ClearfixProps> { }
