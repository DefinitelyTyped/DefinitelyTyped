import * as React from 'react';
import {
  ScaledSize,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import Drawer from 'react-native-drawer';

class DrawerTest extends React.Component<{}, {open: boolean}> {
    constructor(props: {}) {
      super(props);
      this.state = {
        open: true
      };
    }

    render() {
        return (
            <Drawer
              type="overlay"
              open={this.state.open}
              content={<View />}
              onOpen={this.onOpen}
              onClose={this.onClose}
              closedDrawerOffset={100}
              openDrawerOffset={(viewport: ScaledSize) => 50}
            >
            </Drawer>
        );
    }

    private onOpen = () => {
      this.setState({open: true});
    }

    private onClose = () => {
      this.setState({open: false});
    }
}
