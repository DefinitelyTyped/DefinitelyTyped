// React-Autosuggest Test
// ================================================================================
///<reference path="react-autosuggest.d.ts"/>
///<reference path="../react/react.d.ts"/>
///<reference path="../react/react-dom.d.ts"/>

//region Imports
import React = require('react');
import ReactDOM = require('react-dom');
import Autosuggest = require('react-autosuggest');
//endregion

interface Language {
    name: string;
    year: number;
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export class ReactAutosuggestBasicTest extends React.Component<any, any> {
    //region Fields
    public static languages: Language[] = [
        {name: 'C', year: 1972},
        {name: 'C#', year: 2000},
        {name: 'C++', year: 1983},
        {name: 'Clojure', year: 2007},
        {name: 'Elm', year: 2012},
        {name: 'Go', year: 2009},
        {name: 'Haskell', year: 1990},
        {name: 'Java', year: 1995},
        {name: 'Javascript', year: 1995},
        {name: 'Perl', year: 1987},
        {name: 'PHP', year: 1995},
        {name: 'Python', year: 1991},
        {name: 'Ruby', year: 1995},
        {name: 'Scala', year: 2003}
    ];
    //endregion


    //region Constructor
    constructor(props: any) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.getSuggestions('')
        };
    }
    //endregion

    //region Rendering methods
    public render(): JSX.Element {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: `Type 'c'`,
            value,
            onChange: this.onChange.bind(this)
        };

        return <Autosuggest suggestions={suggestions}
                            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested.bind(this)}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps}/>;
    }

    protected renderSuggestion(suggestion: Language): JSX.Element {
        return <span>{suggestion.name}</span>;
    }
    //endregion

    //region Event handlers
    protected onChange(event: React.FormEvent, {newValue, method}): void {
        this.setState({
            value: newValue
        });
    }

    protected onSuggestionsUpdateRequested({ value }): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    //endregion

    //region Helper methods
    protected getSuggestions(value: string): Language[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return ReactAutosuggestBasicTest.languages.filter(language => regex.test(language.name));
    }

    protected getSuggestionValue(suggestion: Language): string {
        return suggestion.name;
    }
    //endregion
}

ReactDOM.render(<ReactAutosuggestBasicTest />, document.getElementById('app'));

interface LanguageGroup {
    title: string;
    languages: Language[];
}

export class ReactAutosuggestMultipleTest extends React.Component<any, any> {
    //region Fields
    public static languages: LanguageGroup[] = [
        {
            title: '1970s',
            languages: [
                {name: 'C', year: 1972}
            ]
        },
        {
            title: '1980s',
            languages: [
                {name: 'C++', year: 1983},
                {name: 'Perl', year: 1987}
            ]
        },
        {
            title: '1990s',
            languages: [
                {name: 'Haskell', year: 1990},
                {name: 'Python', year: 1991},
                {name: 'Java', year: 1995},
                {name: 'Javascript', year: 1995},
                {name: 'PHP', year: 1995},
                {name: 'Ruby', year: 1995}
            ]
        },
        {
            title: '2000s',
            languages: [
                {name: 'C#', year: 2000},
                {name: 'Scala', year: 2003},
                {name: 'Clojure', year: 2007},
                {name: 'Go', year: 2009}
            ]
        },
        {
            title: '2010s',
            languages: [
                {name: 'Elm', year: 2012}
            ]
        }
    ];
    //endregion

    //region Constructor
    constructor(props: any) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.getSuggestions('')
        };
    }
    //endregion

    //region Rendering methods
    public render(): JSX.Element {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: `Type 'c'`,
            value,
            onChange: this.onChange.bind(this)
        };

        return <Autosuggest multiSection={true}
                            suggestions={suggestions}
                            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested.bind(this)}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            renderSectionTitle={this.renderSectionTitle}
                            getSectionSuggestions={this.getSectionSuggestions}
                            inputProps={inputProps} />;
    }

    protected renderSuggestion(suggestion: Language): JSX.Element {
        return <span>{suggestion.name}</span>;
    }

    protected renderSectionTitle(section: LanguageGroup): JSX.Element {
        return <strong>{section.title}</strong>;
    }
    //endregion

    //region Event handlers
    protected onChange(event: React.FormEvent, { newValue, method }): void {
        this.setState({
            value: newValue
        });
    }

    protected onSuggestionsUpdateRequested({ value }): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    //endregion

    //region Helper methods
    protected getSuggestions(value: string): LanguageGroup[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return ReactAutosuggestMultipleTest.languages
            .map(section => {
                return {
                    title: section.title,
                    languages: section.languages.filter(language => regex.test(language.name))
                };
            })
            .filter(section => section.languages.length > 0);
    }

    protected getSuggestionValue(suggestion: Language) {
        return suggestion.name;
    }

    protected getSectionSuggestions(section: LanguageGroup) {
        return section.languages;
    }
    //endregion
}

ReactDOM.render(<ReactAutosuggestMultipleTest />, document.getElementById('app'));

interface IPerson {
    first: string;
    last: string;
    twitter: string;
}

export class ReactAutosuggestCustomTest extends React.Component<any, any> {
    //region Fields
    public static people: IPerson[] = [
        {first: 'Charlie', last: 'Brown', twitter: 'dancounsell'},
        {first: 'Charlotte', last: 'White', twitter: 'mtnmissy'},
        {first: 'Chloe', last: 'Jones', twitter: 'ladylexy'},
        {first: 'Cooper', last: 'King', twitter: 'steveodom'}
    ];
    //endregion

    //region Constructor
    constructor(props: any) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.getSuggestions('')
        };
    }
    //endregion

    //region Rendering methods
    public render(): JSX.Element {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: this.onChange.bind(this)
        };

        return <Autosuggest suggestions={suggestions}
                            onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            inputProps={inputProps} />;
    }

    protected renderSuggestion(suggestion: IPerson, { value, valueBeforeUpDown }): JSX.Element {
        const suggestionText = `${suggestion.first} ${suggestion.last}`;
        const query = (valueBeforeUpDown || value).trim();
        const parts =  suggestionText.split(' ').map((part: string) => {
            return {
                highlight: (Math.ceil(Math.random() * 10)) % 2,
                text: part
            }
        });

        return <span className={'suggestion-content ' + suggestion.twitter}>
            <span className="name">
            {
                parts.map((part, index) => {
                    const className = part.highlight ? 'highlight' : null;

                    return <span className={className} key={index}>{part.text}</span>;
                    })
                }
            </span>
        </span>;
    }
    //endregion

    //region Event handlers
    protected onChange(event: React.FormEvent, {newValue, method}): void {
        this.setState({
            value: newValue
        });
    }

    protected onSuggestionsUpdateRequested({ value }): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    //endregion

    //region Helper methods
    protected getSuggestions(value: string): IPerson[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('\\b' + escapedValue, 'i');

        return ReactAutosuggestCustomTest.people.filter(person => regex.test(this.getSuggestionValue(person)));
    }

    protected getSuggestionValue(suggestion: IPerson): string {
        return `${suggestion.first} ${suggestion.last}`;
    }
    //endregion
}

ReactDOM.render(<ReactAutosuggestCustomTest />, document.getElementById('app'));
