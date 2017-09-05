import * as React from 'react';
import { View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

class CollapsibleTest extends React.Component<any, any> {
  render() {
    return (
      <Collapsible collapsed={true}>
        <View />
      </Collapsible>
    );
  }
}

class AccordianTest extends React.Component<any, any> {
  _renderHeader() {
    return (
      <View />
    );
  }

  _renderContent() {
    return (
      <View />
    );
  }

  render() {
    return (
      <Accordion
        sections={['Section 1', 'Section 2', 'Section 3']}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
