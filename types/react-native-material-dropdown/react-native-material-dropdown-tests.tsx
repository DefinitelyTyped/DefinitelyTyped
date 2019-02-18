import * as React from 'react';
import { Dropdown, DropDownData, RenderBaseProps } from 'react-native-material-dropdown';
import { LayoutChangeEvent, LayoutRectangle, Text, View } from 'react-native';

interface DropdownTestProps {
  title: string;
}

class DropdownTest extends React.Component<DropdownTestProps> {
  private layout: LayoutRectangle;
  private isFocused: boolean;
  private curText: string;

  render(): JSX.Element {
    const dropdownData: DropDownData[] = [
      {
        label: 'Apple',
        value: 'apple'
      },
      {
        label: 'Orange',
        value: 'orange'
      },
      {
        label: 'Peach',
        value: 'peach',
        props: { disabled: true },
      }
    ];

    return (
      <div>
        <Text>{this.props.title}</Text>
        <Dropdown
          data={dropdownData}
          value={'orange'}
          label='Fruits'
          propsExtractor={(item, index) => item.props ? item.props : {}}
          onLayout={(event: LayoutChangeEvent) => this.layout = event.nativeEvent.layout}
          onFocus={() => this.isFocused = true}
          onBlur={() => this.isFocused = false}
          onChangeText={(value: string) => this.curText = value}
        />

        <Dropdown
          data={dropdownData}
          containerStyle={{backgroundColor: '#fff'}}
          renderBase={(props: RenderBaseProps) => <Text>{props.title}</Text>}
        />
      </div>
    );
  }
}

export default DropdownTest;
