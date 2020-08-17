import * as React from 'react';

import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

class App extends React.PureComponent {
    _menu: Menu | null = null;

    setMenuRef = (ref: Menu) => (this._menu = ref);

    hideMenu = () => this._menu && this._menu.hide();

    showMenu = () => this._menu && this._menu.show();

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Menu ref={this.setMenuRef} button={<Text onPress={this.showMenu}>Show menu</Text>}>
                    <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                    <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                    <MenuItem onPress={this.hideMenu} disabled>
                        Menu item 3
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>Menu item 4</MenuItem>
                </Menu>
            </View>
        );
    }
}

export default App;
