import * as React from 'react';
import { MentionsInput, Mention, SuggestionDataItem } from 'react-mentions';
import {
    applyChangeToValue,
    combineRegExps,
    Config,
    findPositionOfCapturingGroup,
    findStartOfMentionInPlainText,
    getEndOfLastMention,
    getMentions,
    getPlainText,
    getSubstringIndex,
    getSuggestionHtmlId,
    isNumber,
    isPlainObject,
    iterateMentionsMarkup,
    keys,
    mapPlainTextIndex,
    markupToRegex,
    merge,
    mergeDeep,
    omit,
    PLACEHOLDERS,
    spliceString,
} from 'react-mentions/lib/utils';

interface TestProps {
    data: SuggestionDataItem[];
    value?: string | undefined;
    onChange?: (() => void) | undefined;
    onAdd?: (() => void) | undefined;
    regex: RegExp;
}

export const TestSimple: React.FC<TestProps> = props => {
    const inputEl = React.createRef<HTMLTextAreaElement>();

    function handleClick() {
        if (inputEl.current) {
            inputEl.current.focus();
        }
    }

    return (
        <>
            <MentionsInput
                value={props.value}
                onChange={props.onChange}
                placeholder={"Mention people using '@'"}
                inputRef={inputEl}
            >
                <Mention trigger="@" displayTransform={login => `@${login}`} data={props.data} onAdd={props.onAdd} />
            </MentionsInput>

            <button onClick={handleClick}>Focus</button>
        </>
    );
};

export const TestMultipleTrigger: React.FC<TestProps> = props => {
    return (
        <MentionsInput value={props.value} onChange={props.onChange} placeholder={"Mention people using '@'"}>
            <Mention
                trigger="@"
                markup={`@[${PLACEHOLDERS.display}](__type__:${PLACEHOLDERS.id})`}
                data={props.data}
                renderSuggestion={(
                    suggestion: SuggestionDataItem,
                    search: string,
                    highlightedDisplay: React.ReactNode,
                    index: number,
                    focused: boolean,
                ) => <div className={`user ${focused ? 'focused' : ''}`}>{highlightedDisplay}</div>}
                onAdd={props.onAdd}
            />

            <Mention
                trigger={props.regex}
                markup={`@[${PLACEHOLDERS.display}](__type__:${PLACEHOLDERS.id})`}
                data={search => [{ id: search, display: search }]}
                onAdd={props.onAdd}
            />
        </MentionsInput>
    );
};

export const TestCustomSuggestionContainer: React.FC<TestProps> = props => {
    return (
        <MentionsInput
            value={props.value}
            onChange={props.onChange}
            placeholder={"Mention people using '@'"}
            customSuggestionsContainer={children => <div className="suggestions">{children}</div>}
        >
            <Mention
                trigger={props.regex}
                markup={`@[${PLACEHOLDERS.display}](__type__:${PLACEHOLDERS.id})`}
                data={search => [{ id: search, display: search }]}
                onAdd={props.onAdd}
            />
        </MentionsInput>
    );
};

export const TestAsyncDataFunc: React.FunctionComponent<TestProps> = props => {
    return (
        <MentionsInput value={props.value} onChange={props.onChange} placeholder={"Mention people using '@'"}>
            {/* Using async function syntax: */}
            <Mention
                trigger={props.regex}
                markup={`@[${PLACEHOLDERS.display}](__type__:${PLACEHOLDERS.id})`}
                data={async search => [{ id: search, display: search }]}
                onAdd={props.onAdd}
            />
            {/* Using explicit Promise syntax: */}
            <Mention
                trigger={props.regex}
                markup={`@[${PLACEHOLDERS.display}](__type__:${PLACEHOLDERS.id})`}
                data={search => Promise.resolve([{ id: search, display: search }])}
                onAdd={props.onAdd}
            />
        </MentionsInput>
    );
};

/**
 * Utils
 */

const markup = `@[${PLACEHOLDERS.display}](user:${PLACEHOLDERS.id})`;
const regex = new RegExp(`@[${PLACEHOLDERS.display}](user:${PLACEHOLDERS.id})`);
const config: Config = {
    markup,
    regex,
    displayTransform: (_id, display) => display,
};

// $ExpectType number
mapPlainTextIndex('foo', markup, 1, 'NULL');

// $ExpectType string
applyChangeToValue(
    'foo',
    'bar',
    {
        selectionStartBefore: 0,
        selectionEndBefore: 0,
        selectionEndAfter: 0,
    },
    [config],
);

// $ExpectType RegExp
combineRegExps([/a/, /b/]);

// $ExpectType 0 | 1
findPositionOfCapturingGroup(markup, 'display');

// $ExpectType number
findStartOfMentionInPlainText('foo', [config], 0);

// $ExpectType number
getEndOfLastMention('foo', config);

// $ExpectType Mention[]
getMentions('foo', config);

// $ExpectType string
getPlainText('foo', config);

// $ExpectType number
getSubstringIndex('foo', 'bar', false);

// $ExpectType string
getSuggestionHtmlId('prefix', 'id');

// $ExpectType false
isNumber('string');

// $ExpectType false
isNumber({});

// $ExpectType false
isNumber(null);

// $ExpectType false
isNumber(undefined);

// $ExpectType false
isNumber([]);

// $ExpectType true
isNumber(10);

// $ExpectType false
isPlainObject('string');

// $ExpectType true
isPlainObject({});

// $ExpectType false
isPlainObject(null);

// $ExpectType false
isPlainObject(undefined);

// $ExpectType false
isPlainObject([]);

// $ExpectType false
isPlainObject(10);

// $ExpectType void
iterateMentionsMarkup('foo', [config], (match, index, plainTextIndex, id, display, childIndex, start) => {
    // $ExpectType string
    match;

    // $ExpectType number
    index;

    // $ExpectType number
    plainTextIndex;

    // $ExpectType string | number
    id;

    // $ExpectType string
    display;

    // $ExpectType number
    childIndex;

    // $ExpectType number
    start;
});

// $ExpectType void
iterateMentionsMarkup(
    'foo',
    [config],
    (match, index, plainTextIndex, id, display, childIndex, start) => {
        // $ExpectType string
        match;

        // $ExpectType number
        index;

        // $ExpectType number
        plainTextIndex;

        // $ExpectType string | number
        id;

        // $ExpectType string
        display;

        // $ExpectType number
        childIndex;

        // $ExpectType number
        start;
    },
    (substr, start, plainTextIndex) => {
        // $ExpectType string
        substr;

        // $ExpectType number
        start;

        // $ExpectType number
        plainTextIndex;
    },
);

// $ExpectType ("foo" | "bar")[]
keys({ foo: 'value', bar: 'value' });

// $ExpectType RegExp
markupToRegex(markup);

// $ExpectType object
merge({ foo1: 'value', bar1: 'value' }, { foo: 'value' }, { bar: 'value' });

// $ExpectType { foo1: string; bar1: string; } & { foo: string; }
mergeDeep({ foo1: 'value', bar1: 'value' }, { foo: 'value' });

// $ExpectType object
omit({ foo: 'value', bar: 'value' }, 'bar');

// $ExpectType string
spliceString('foo', 0, 1, 'bar');
