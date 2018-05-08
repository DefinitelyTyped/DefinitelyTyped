import { PureComponent, Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  TabViewAnimated,
  TabBar,
  SceneMap,
  TabBarProps,
  RouteBase,
} from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
)

class SecondRoute extends Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
    );
  }
}

class TabViewExample extends PureComponent {
  state: { index: number; routes: Array<RouteBase & { title: string }> } = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  }

  _handleIndexChange = (index: number) => this.setState({ index })

  _renderHeader = (props: TabBarProps) => <TabBar {...props} />

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
