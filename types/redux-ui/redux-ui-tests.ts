import * as React from 'react';
import * as Redux from 'redux';
import ui, { ReduxUIProps, reducer } from 'redux-ui';

interface UIShape {
  s: string;
}

@ui<UIShape>({
  key: 'Root',
  persist: true,
  state: {
    s: '',
  },
  mergeProps: () => ({}),
  options: {}
})
class Root extends React.Component<ReduxUIProps<UIShape>> {
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
