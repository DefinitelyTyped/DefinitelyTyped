export type InstructionsContext = { isSearchable?: boolean, isMulti?: boolean, label?: string };
export type ValueEventContext = { value: string };

export const instructionsAriaMessage = (event, context?: InstructionsContext = {}) => {
  const { isSearchable, isMulti, label } = context;
  switch (event) {
    case 'menu':
      return 'Use Up and Down to choose options, press Backspace to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.';
    case 'input':
      return `${label ? label : 'Select'} is focused ${ isSearchable ? ',type to refine list' : '' }, press Down to open the menu, ${ isMulti ? ' press left to focus selected values' : '' }`;
    case 'value':
      return 'Use left and right to toggle between focused values, press Enter to remove the currently focused value';
  }
};

export const valueEventAriaMessage = (event, context: ValueEventContext) => {
  const { value } = context;
  if (!value) return;
  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return `option ${value}, deselected.`;
    case 'select-option':
      return `option ${value}, selected.`;
  }
};

export const valueFocusAriaMessage = ({ focusedValue, getOptionLabel, selectValue }) => `value ${getOptionLabel(focusedValue)} focused, ${selectValue.indexOf(focusedValue) + 1} of ${selectValue.length}.`;
export const optionFocusAriaMessage = ({ focusedOption, getOptionLabel, options }) => `option ${getOptionLabel(focusedOption)} focused, ${options.indexOf(focusedOption) + 1} of ${options.length}.`;
export const resultsAriaMessage = ({ inputValue, screenReaderMessage }) => `${screenReaderMessage}${inputValue ? ' for search term ' + inputValue : ''}.`;
