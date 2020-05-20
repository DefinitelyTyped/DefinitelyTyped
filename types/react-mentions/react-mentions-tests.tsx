import * as React from "react";
import { MentionsInput, Mention, SuggestionDataItem } from "react-mentions";
import { mapPlainTextIndex } from "react-mentions/lib/utils";

interface TestProps {
    data: SuggestionDataItem[];
    value?: string;
    onChange?: () => void;
    onAdd?: () => void;
    regex: RegExp;
}

export const TestSimple: React.SFC<TestProps> = (props) => {
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
                <Mention
                    trigger="@"
                    displayTransform={login => `@${login}`}
                    data={props.data}
                    onAdd={props.onAdd}
                />
            </MentionsInput>

            <button onClick={handleClick}>Focus</button>
        </>
    );
};

export const TestMultipleTrigger: React.SFC<TestProps> = (props) => {
    return (
        <MentionsInput
            value={props.value}
            onChange={props.onChange}
            placeholder={"Mention people using '@'"}
        >
            <Mention
                trigger="@"
                markup="@[__display__](__type__:__id__)"
                data={props.data}
                renderSuggestion={(suggestion: SuggestionDataItem, search: string, highlightedDisplay: React.ReactNode, index: number, focused: boolean) => (
                    <div className={`user ${focused ? 'focused' : ''}`}>
                    {highlightedDisplay}
                    </div>
                )}
                onAdd={props.onAdd}
            />

            <Mention
                trigger={props.regex}
                markup="@[__display__](__type__:__id__)"
                data={search => [{ id: search, display: search }]}
                onAdd={props.onAdd}
            />
        </MentionsInput>
    );
};

mapPlainTextIndex("foo", "bar", 1, "NULL", login => `@${login}`, /.*/); // $ExpectType number
