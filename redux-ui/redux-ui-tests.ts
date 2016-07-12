///<reference path="redux-ui.d.ts" />
/// <reference path="../react/react.d.ts"/>

import * as React from 'react'
import ui, { ReduxUIProps, reducer } from 'redux-ui'

type UIShape = {
  s: string;
};

@ui<UIShape>({
  key: 'Root',
  persist: true,
  state: {
    s: '',
  },
  mergeProps: () => ({}),
  options: {}
})
class Root extends React.Component<ReduxUIProps<UIShape>, {}> {
  componentWillMount() {
    console.info(
      this.props.ui.s,
      this.props.uiKey
    );
    this.props.updateUI('s', 'a');
    this.props.updateUI({s: 'a'});
    this.props.resetUI();
  }
}

Redux.combineReducers({
  ui: reducer,
});

