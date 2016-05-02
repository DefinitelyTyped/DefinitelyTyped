/// <reference path="react-autosuggest.d.ts" />
/// <reference path="../react/react.d.ts" />

import Autosuggest = require('react-autosuggest');
import * as React from 'react';

let autosuggest = <Autosuggest
  suggestions={[{name: "C", year: "1972" }, {name: "Elm", year: "2012" }]}
  getSuggestionValue={(suggestion: any) => suggestion.name}
  renderSuggestion={(suggestion: any) => (<span>{suggestion.name}</span>)}
  inputProps={{value: "El", onChange: (event: any, params: {newValue: string, method: string}) => {}}}
/>
