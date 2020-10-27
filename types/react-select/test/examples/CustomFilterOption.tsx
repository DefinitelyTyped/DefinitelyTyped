import * as React from 'react';

import Select from 'react-select';

interface GroupOption {
  label: string;
  value: string;
  data: {
    email: string
    name: string
  };
}

function filterOption(option: GroupOption, rawInput: string): boolean {
  return (option.data.email + option.data.name).includes(rawInput);
}

const values: GroupOption[] = [
    { label: "", value: "", data: { email: "", name: "" }}
];

export default () => (
  <Select<GroupOption>
    defaultValue={values[0]}
    options={values}
    filterOption={filterOption}
  />
);
