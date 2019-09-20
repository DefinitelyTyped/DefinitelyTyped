import * as React from 'react';

import Select from 'react-select';
import { colourOptions } from '../data';

const CustomClearText = () => <span>clear all</span>;
const ClearIndicator = (props: any) => {
  const { children = <CustomClearText/>, getStyles, innerProps: { ref, ...restInnerProps } } = props;
  return (
    <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
      <div style={{ padding: '0px 5px' }}>
        {children}
      </div>
    </div>
  );
};

const ClearIndicatorStyles = (base: any, state: any) => ({
  ...base,
  cursor: 'pointer',
  color: state.isFocused ? 'blue' : 'black',
});

export default function CustomClearIndicator() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ ClearIndicator }}
      styles={{ clearIndicator: ClearIndicatorStyles }}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
