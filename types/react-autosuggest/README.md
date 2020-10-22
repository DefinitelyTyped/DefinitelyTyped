# react-autosuggest usage notes

The definition uses generics for stronger typing. Read the [TypeScript deep dive on JSX Generic components](https://basarat.gitbooks.io/typescript/docs/jsx/tsx.html#react-jsx-tip-generic-components) for details on consuming these type definitions.

## Example 

```jsx
import * as Autosuggest from 'react-autosuggest'
interface Language {
    name: string
    year: number
}

const LanguageAutosuggest = Autosuggest as { new (): Autosuggest<Language> }

<LanguageAutosuggest
    suggestions={suggestions}
    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
    getSuggestionValue={this.getSuggestionValue}
    renderSuggestion={this.renderSuggestion}
    onSuggestionSelected={this.onSuggestionsSelected}
    alwaysRenderSuggestions={true}
    inputProps={inputProps}
    theme={theme}
/>
```

Find multiple full examples in `react-autosuggest-tests.tsx`
