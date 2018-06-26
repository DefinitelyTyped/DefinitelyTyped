import * as React from 'react';
import { Text, View } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';

interface DrawerTestState {
  open: boolean;
}

class DrawerTest extends React.Component<{}, DrawerTestState> {
    state: DrawerTestState = {
      open: false
    };

    private readonly onOpen = () => this.setState({ open: true });

    private readonly onClose = () => this.setState({ open: false });

    private readonly renderNavigationView = () => (
      <View>
        <Text>Drawer content</Text>
      </View>
    )

    render() {
        return (
            <DrawerLayout
              drawerPosition="left"
              drawerWidth={200}
              onDrawerOpen={this.onOpen}
              onDrawerClose={this.onClose}
              renderNavigationView={this.renderNavigationView}
            >
              <View>
                <Text>Screen content</Text>
                <Text>
                    {
                        DrawerLayout.positions.Left
                    }
                </Text>
                <Text>
                    {
                        DrawerLayout.positions.Right
                    }
                </Text>
              </View>
            </DrawerLayout>
        );
    }
}
