// region Imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Autosuggest = require('react-autosuggest');
// endregion

interface Language {
    name: string;
    year: number;
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expression
// s#Using_Special_Characters
function escapeRegexCharacters(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export class ReactAutosuggestBasicTest extends React.Component<any, any> {
    // region Fields
    static languages: Language[] = [
        {
            name: 'C',
            year: 1972
        }, {
            name: 'C#',
            year: 2000
        }, {
            name: 'C++',
            year: 1983
        }, {
            name: 'Clojure',
            year: 2007
        }, {
            name: 'Elm',
            year: 2012
        }, {
            name: 'Go',
            year: 2009
        }, {
            name: 'Haskell',
            year: 1990
        }, {
            name: 'Java',
            year: 1995
        }, {
            name: 'Javascript',
            year: 1995
        }, {
            name: 'Perl',
            year: 1987
        }, {
            name: 'PHP',
            year: 1995
        }, {
            name: 'Python',
            year: 1991
        }, {
            name: 'Ruby',
            year: 1995
        }, {
            name: 'Scala',
            year: 2003
        }
    ];
    // endregion region Constructor
    state = {
        value: '',
        suggestions: this.getSuggestions('')
    };
    // endregion region Rendering methods
    render(): JSX.Element {
        const {value, suggestions} = this.state;

        const theme = {
            input: 'themed-input-class',
            container: 'themed-container-class',
            suggestionFocused: 'active',
            sectionTitle: { color: 'blue' }
        };

        return <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this
                .onSuggestionsFetchRequested
                .bind(this)}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionsSelected}
            alwaysRenderSuggestions={true}
            inputProps={{
                placeholder: `Type 'c'`,
                value,
                onChange: (e, changeEvent) => this.onChange(e, changeEvent),
                onBlur: (e) => { console.log(e.relatedTarget); }
            }}
            theme={theme}/>;
    }

    protected onSuggestionsSelected(event: React.FormEvent<any>, data: Autosuggest.SuggestionSelectedEventData<Language>): void {
        alert(`Selected language is ${data.suggestion.name} (${data.suggestion.year}).`);
    }

    protected renderSuggestion(suggestion: Language, params: Autosuggest.RenderSuggestionParams): JSX.Element {
        const className = params.isHighlighted ? "highlighted" : undefined;
        return <span className={className}>{suggestion.name}</span>;
    }
    // endregion region Event handlers
    protected onChange(event: React.FormEvent<any>, {newValue, method}: Autosuggest.ChangeEvent): void {
        this.setState({value: newValue});
    }

    protected onSuggestionsFetchRequested({value}: any): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    // endregion region Helper methods
    protected getSuggestions(value: string): Language[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return ReactAutosuggestBasicTest
            .languages
            .filter(language => regex.test(language.name));
    }

    protected getSuggestionValue(suggestion: Language): string { return suggestion.name; }
    // endregion
}

const LanguageAutosuggestSingle = Autosuggest as { new (): Autosuggest<Language> };
const LanguageAutosuggestMulti = Autosuggest as { new (): Autosuggest<Language, LanguageGroup> };

export class ReactAutosuggestTypedTest extends React.Component<any, any> {
    // region Fields
    static languages: Language[] = [
        {
            name: 'C',
            year: 1972
        }, {
            name: 'C#',
            year: 2000
        }, {
            name: 'C++',
            year: 1983
        }, {
            name: 'Clojure',
            year: 2007
        }, {
            name: 'Elm',
            year: 2012
        }, {
            name: 'Go',
            year: 2009
        }, {
            name: 'Haskell',
            year: 1990
        }, {
            name: 'Java',
            year: 1995
        }, {
            name: 'Javascript',
            year: 1995
        }, {
            name: 'Perl',
            year: 1987
        }, {
            name: 'PHP',
            year: 1995
        }, {
            name: 'Python',
            year: 1991
        }, {
            name: 'Ruby',
            year: 1995
        }, {
            name: 'Scala',
            year: 2003
        }
    ];
    // endregion region Constructor
    state = {
        value: '',
        suggestions: this.getSuggestions('')
    };
    // endregion region Rendering methods
    render(): JSX.Element {
        const {value, suggestions} = this.state;

        const theme = {
            input: 'themed-input-class',
            container: 'themed-container-class',
            suggestionFocused: 'active',
            sectionTitle: { color: 'blue' }
        };

        return <LanguageAutosuggestSingle
            suggestions={suggestions}
            onSuggestionsFetchRequested={this
            .onSuggestionsFetchRequested
            .bind(this)}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            onSuggestionSelected={this.onSuggestionsSelected}
            alwaysRenderSuggestions={true}
            inputProps={{
                placeholder: `Type 'c'`,
                value,
                onChange: (e, changeEvent) => this.onChange(e, changeEvent),
            }}
            theme={theme}/>;
    }

    protected onSuggestionsSelected(event: React.FormEvent<any>, data: Autosuggest.SuggestionSelectedEventData<Language>): void {
        alert(`Selected language is ${data.suggestion.name} (${data.suggestion.year}).`);
    }

    protected renderSuggestion(suggestion: Language, params: Autosuggest.RenderSuggestionParams): JSX.Element {
        const className = params.isHighlighted ? "highlighted" : undefined;
        return <span className={className}>{suggestion.name}</span>;
    }
    // endregion region Event handlers
    protected onChange(event: React.FormEvent<any>, {newValue, method}: Autosuggest.ChangeEvent): void {
        this.setState({value: newValue});
    }

    protected onSuggestionsFetchRequested({value}: any): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    // endregion region Helper methods
    protected getSuggestions(value: string): Language[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return ReactAutosuggestBasicTest
            .languages
            .filter(language => regex.test(language.name));
    }

    protected getSuggestionValue(suggestion: Language): string { return suggestion.name; }
    // endregion
}

ReactDOM.render(
   <ReactAutosuggestBasicTest/>, document.getElementById('app'));

interface LanguageGroup {
    title: string;
    languages: Language[];
}

export class ReactAutosuggestMultipleTest extends React.Component<any, any> {
    // region Fields
    static languages: LanguageGroup[] = [
        {
            title: '1970s',
            languages: [
                {
                    name: 'C',
                    year: 1972
                }
            ]
        }, {
            title: '1980s',
            languages: [
                {
                    name: 'C++',
                    year: 1983
                }, {
                    name: 'Perl',
                    year: 1987
                }
            ]
        }, {
            title: '1990s',
            languages: [
                {
                    name: 'Haskell',
                    year: 1990
                }, {
                    name: 'Python',
                    year: 1991
                }, {
                    name: 'Java',
                    year: 1995
                }, {
                    name: 'Javascript',
                    year: 1995
                }, {
                    name: 'PHP',
                    year: 1995
                }, {
                    name: 'Ruby',
                    year: 1995
                }
            ]
        }, {
            title: '2000s',
            languages: [
                {
                    name: 'C#',
                    year: 2000
                }, {
                    name: 'Scala',
                    year: 2003
                }, {
                    name: 'Clojure',
                    year: 2007
                }, {
                    name: 'Go',
                    year: 2009
                }
            ]
        }, {
            title: '2010s',
            languages: [
                {
                    name: 'Elm',
                    year: 2012
                }
            ]
        }
    ];

    state: any;
    // endregion region Constructor
    constructor(props: any) {
        super(props);

        this.state = {
            value: '',
            suggestions: this.getSuggestions(''),
            highlighted: ''
        };
    }
    // endregion region Rendering methods
    render(): JSX.Element {
        const {value, suggestions} = this.state;

        return <LanguageAutosuggestMulti
            multiSection={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this
            .onSuggestionsFetchRequested
            .bind(this)}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            renderSectionTitle={this.renderSectionTitle}
            getSectionSuggestions={this.getSectionSuggestions}
            onSuggestionHighlighted={this.onSuggestionHighlighted}
            highlightFirstSuggestion={true}
            renderInputComponent={this.renderInputComponent}
            renderSuggestionsContainer={this.renderSuggestionsContainer}
            inputProps={{
                placeholder: `Type 'c'`,
                value,
                onChange: (e, changeEvent) => this.onChange(e, changeEvent),
            }}/>;
    }

    protected onSuggestionSelected(event: React.FormEvent<any>, data: Autosuggest.SuggestionSelectedEventData<Language>): void {
        const language: Language = data.suggestion;
        alert(`Selected language is ${language.name} (${language.year}).`);
    }

    protected renderSuggestion(suggestion: Language, params: Autosuggest.RenderSuggestionParams): JSX.Element {
        const className = params.isHighlighted ? "highlighted" : undefined;
        return <span className={className}>{suggestion.name}</span>;
    }

    protected renderSectionTitle(section: LanguageGroup): JSX.Element {
        return <strong>{section.title}</strong>;
    }

    protected renderInputComponent(inputProps: Autosuggest.InputProps<Language>): JSX.Element {
        const { onChange, onBlur, ...restInputProps } = inputProps;
        return (
            <div>
                <input {...restInputProps} />
            </div>
        );
    }

    protected renderSuggestionsContainer({containerProps, children, query}: Autosuggest.RenderSuggestionsContainerParams): JSX.Element {
        return (
            <div {...containerProps}>
                <span>{children}</span>
            </div>
        );
    }
    // endregion region Event handlers
    protected onChange(event: React.FormEvent<any>, {newValue, method}: Autosuggest.ChangeEvent): void {
        this.setState({value: newValue});
    }

    protected onSuggestionsFetchRequested({value}: any): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    // endregion region Helper methods
    protected getSuggestions(value: string): LanguageGroup[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('^' + escapedValue, 'i');

        return ReactAutosuggestMultipleTest
            .languages
            .map(section => {
                return {
                    title: section.title,
                    languages: section
                        .languages
                        .filter(language => regex.test(language.name))
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

    protected onSuggestionHighlighted(params: Autosuggest.SuggestionHighlightedParams): void {
        this.setState({
            highlighted: params.suggestion
        });
    }
    // endregion
}

ReactDOM.render(
   <ReactAutosuggestMultipleTest/>, document.getElementById('app'));

interface Person {
    first: string;
    last: string;
    twitter: string;
}

const PersonAutosuggest = Autosuggest as { new (): Autosuggest<Person> };

export class ReactAutosuggestCustomTest extends React.Component<any, any> {
    // region Fields
    static people: Person[] = [
        {
            first: 'Charlie',
            last: 'Brown',
            twitter: 'dancounsell'
        }, {
            first: 'Charlotte',
            last: 'White',
            twitter: 'mtnmissy'
        }, {
            first: 'Chloe',
            last: 'Jones',
            twitter: 'ladylexy'
        }, {
            first: 'Cooper',
            last: 'King',
            twitter: 'steveodom'
        }
    ];
    // endregion region Constructor
    state = {
        value: '',
        suggestions: this.getSuggestions('')
    };
    // endregion region Rendering methods
    render(): JSX.Element {
        const {value, suggestions} = this.state;

        return<PersonAutosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={{
                placeholder: "Type 'c'",
                value,
                onChange: (e, changeEvent) => this.onChange(e, changeEvent),
            }}/>;
    }

    protected renderSuggestion(suggestion: Person, params: Autosuggest.RenderSuggestionParams): JSX.Element {
        const suggestionText = `${suggestion.first} ${suggestion.last}`;
        const query = params.query.trim();
        const parts = suggestionText
            .split(' ')
            .map((part: string) => {
                return {
                    highlight: (Math.ceil(Math.random() * 10)) % 2,
                    text: part
                };
            });

        return<span className={'suggestion-content ' + suggestion.twitter}>
           <span className="name">
                {parts.map((part, index) => {
                    const className = part.highlight
                        ? 'highlight'
                        : undefined;

                    return<span className={className} key={index}>{part.text}</span>;
                })
}
           </span>
       </span>;
    }
    // endregion region Event handlers
    protected onChange(event: React.FormEvent<any>, {newValue, method}: Autosuggest.ChangeEvent): void {
        this.setState({value: newValue});
    }

    protected onSuggestionsFetchRequested({value}: any): void {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }
    // endregion region Helper methods
    protected getSuggestions(value: string): Person[] {
        const escapedValue = escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('\\b' + escapedValue, 'i');

        return ReactAutosuggestCustomTest
            .people
            .filter(person => regex.test(this.getSuggestionValue(person)));
    }

    protected getSuggestionValue(suggestion: Person): string { return `${suggestion.first} ${suggestion.last}`; }
    // endregion
}

ReactDOM.render(
   <ReactAutosuggestCustomTest/>, document.getElementById('app'));

const test: Autosuggest.InputProps<{ foo: string }> = {
    onChange: () => {},
    value: 'foo',
    anything: false // $ExpectError
};

function testSingleSection() {
    const suggestions: string[] = [];
    <Autosuggest
        suggestions={suggestions}

        // Required
        getSuggestionValue={suggestion => suggestion}
        inputProps={{
            onChange: () => {},
            value: ''
        }}
        onSuggestionsFetchRequested={() => {}}
        renderSuggestion={suggestion => suggestion}
    />;
}

function testMultiSections() {
    interface Section { title: string; suggestions: string[]; }
    const sections: Section[] = [];
    <Autosuggest
        multiSection
        suggestions={sections}
        getSectionSuggestions={section => section.suggestions}

        // Required
        getSuggestionValue={(suggestion: string) => suggestion}
        inputProps={{
            onChange: () => {},
            value: ''
        }}
        onSuggestionsFetchRequested={() => {}}
        renderSuggestion={suggestion => suggestion}
    />;
}
