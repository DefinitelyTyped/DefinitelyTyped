import * as React from 'react';
import {
  Text
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

interface MyTextProperties extends React.Props<MyText> {
  tabLabel: string;

  text: string;
}
class MyText extends React.Component<MyTextProperties> {
  constructor(props: MyTextProperties) {
    super(props);
  }

  render(): JSX.Element {
    return(
      <Text>this.props.text</Text>
    );
  }
}

class ScrollableTabViewDemo extends React.Component {
  constructor(props: ScrollableTabViewDemo) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <ScrollableTabView>
        <MyText tabLabel='t1' text='t1'></MyText>
        <MyText tabLabel='t2' text='t2'></MyText>
        <MyText tabLabel='t3' text='t3'></MyText>
      </ScrollableTabView>
    );
  }

  componentWillMount?(): void {
  }

  componentWillUnmount?(): void {
  }
}
