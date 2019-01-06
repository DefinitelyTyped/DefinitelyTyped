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
    return (
        <MentionsInput
            value={props.value}
            onChange={props.onChange}
            placeholder={"Mention people using '@'"}
            displayTransform={login => `@${login}`}
        >
        <Mention
            trigger="@"
            data={props.data}
            onAdd={props.onAdd}
        />
        </MentionsInput>
    );
};

export const TestMultipleTrigger: React.SFC<TestProps> = (props) => {
    return (
        <MentionsInput
            value={props.value}
            onChange={props.onChange}
            markup="@[__display__](__type__:__id__)"
            placeholder={"Mention people using '@'"}
        >
            <Mention
                type="user"
                trigger="@"
                data={props.data}
                renderSuggestion={(suggestion: SuggestionDataItem, search: string, highlightedDisplay: React.ReactNode, index: number, focused: boolean) => (
                    <div className={`user ${focused ? 'focused' : ''}`}>
                    {highlightedDisplay}
                    </div>
                )}
                onAdd={props.onAdd}
            />

            <Mention
                type="email"
                trigger={props.regex}
                data={search => [{ id: search, display: search }]}
                onAdd={props.onAdd}
            />
        </MentionsInput>
    );
};

mapPlainTextIndex("foo", "bar", 1, "NULL", login => `@${login}`, /.*/); // $ExpectType number
