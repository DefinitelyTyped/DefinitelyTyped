import * as React from 'react';
import {
  Text
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

interface MyTextProperties extends React.Props<MyText> {
  tabLabel: string;

  text: string;
}
class MyText extends React.Component<MyTextProperties, {}> {
  public constructor(props: MyTextProperties) {
    super(props);
  }

  public render(): JSX.Element {
    return(
      <Text>this.props.text</Text>
    );
  }
}

interface ScrollableTabViewDemoProperties {

}
class ScrollableTabViewDemo extends React.Component<ScrollableTabViewDemoProperties, {}> {
  
  public constructor(props: ScrollableTabViewDemo) {
    super(props);
  }
  
  public render(): JSX.Element {
    return (
      <ScrollableTabView>
        <MyText tabLabel='t1' text='t1'></MyText>
        <MyText tabLabel='t2' text='t2'></MyText>
        <MyText tabLabel='t3' text='t3'></MyText>
      </ScrollableTabView>
    );
  }

  protected componentWillMount?(): void {
  }

  protected componentWillUnmount?(): void {
  }
}