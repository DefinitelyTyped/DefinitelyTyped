import * as React from 'react';
import {
  Text
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class MyText implements React.TextStatic {

}
class ScrollableTabViewDemo extends React.Component<IProperties, {}> {
  
  public constructor(props: IProperties) {
    super(props);
  }
  
  public render(): React.ReactElement<any> {
    return (
      <ScrollableTabView>
        <Text tabLabel='t1'></Text>
        <Text tabLabel='t2'></Text>
        <Text tabLabel='t3'></Text>
      </ScrollableTabView>
    );
  }

  protected componentWillMount?(): void {
  }

  protected componentWillUnmount?(): void {
  }
}