import * as React from 'react';
import { View, Text, TabBarIOS } from 'react-native';
import { createIconSet } from 'react-native-vector-icons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const glyphMap = {
  custom: 58918
};

const CustomIcon = createIconSet(glyphMap, 'FontCustom', 'FontCustom.ttf');

const CustomIconButton         = CustomIcon.Button;
const CustomIconTabBarItem     = CustomIcon.TabBarItem;
const CustomIconTabBarItemIOS  = CustomIcon.TabBarItemIOS;
const CustomIconToolbarAndroid = CustomIcon.ToolbarAndroid;
const CustomIcongetImageSource = CustomIcon.getImageSource;

class Example extends React.Component {
  handleButton() {
    console.log('You pressed me');
  }

  render() {
    return (
      <View>
        {/* Normal Icon */}
        <MaterialIcon size={30} color="red" name="exit" />

        {/* Icon button  */}
        <FontAwesomeIcon.Button
          backgroundColor="#3b5998"
          name="facebook"
          onPress={() => this.handleButton()}
        >
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Login with Facebook
          </Text>
        </FontAwesomeIcon.Button>
      </View>
    );
  }
}

class TabTest extends React.Component<{}, { selectedTab: string }> {
  constructor() {
    super({});

    this.state = {
      selectedTab: 'tab1'
    };
  }

  render() {
    return (
      <TabBarIOS barTintColor="white">
        <Ionicon.TabBarItemIOS
          title="Tab1"
          iconName="ios-keypad-outline"
          selectedIconName="ios-keypad"
          selectedIconColor="pink"
          renderAsOriginal
          selected={this.state.selectedTab === 'tab1'}
          onPress={() => this.setState({ selectedTab: 'tab1' })}
        >
          <View />
        </Ionicon.TabBarItemIOS>

        <Ionicon.TabBarItemIOS
          title="Tab2"
          iconName="ios-bookmark-outline"
          selectedIconName="ios-bookmark"
          selectedIconColor='pink'
          renderAsOriginal
          selected={this.state.selectedTab === 'tab2'}
          onPress={() => this.setState({ selectedTab: 'tab2' })}
        >
          <View />
        </Ionicon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}

class TestCustomIcon extends React.Component {
  constructor() {
    super({});
  }

  handleButton() {
    console.log('You pressed me');
  }

  render() {
    return (
      <View>
        {/* Custom Icon */}
        <CustomIcon size={30} color="blue" name="custom" />

        {/* Custom Icon button  */}
        <CustomIcon.Button
          backgroundColor="#3b5998"
          name="facebook"
          onPress={() => this.handleButton()}
        >
          <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
            Hello CustomIcon!
          </Text>
        </CustomIcon.Button>
      </View>
    );
  }
}
