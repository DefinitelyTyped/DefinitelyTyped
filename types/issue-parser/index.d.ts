// Type definitions for issue-parser 3.0
// Project: https://github.com/pvdlg/issue-parser#readme
// Definitions by: Leko <https://github.com/Leko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function issueParser(
    authOptions?: issueParser.Options,
    extension?: issueParser.Overrides
): issueParser.Parser;

declare namespace issueParser {
    type Parser = (text: string) => Result;
    interface Overrides {
        actions?: {
            [type: string]: ReadonlyArray<string>;
        };
        delimiters?: string | ReadonlyArray<string>;
        mentionsPrefixes?: string | ReadonlyArray<string>;
        issuePrefixes?: string | ReadonlyArray<string>;
        hosts?: string | ReadonlyArray<string>;
        issueURLSegments?: string | ReadonlyArray<string>;
        overrides?: string | ReadonlyArray<string>;
    }
    type Options = "github" | "gitlab" | "bitbucket" | "waffle" | Overrides;
    interface Reference {
        raw: string;
        slug: string | undefined;
        prefix: string | undefined;
        issue: string;
    }
    interface Mention {
        raw: string;
        prefix: string;
        user: string;
    }
    interface Action {
        raw: string;
        action: string;
        slug: string | undefined;
        prefix: string | undefined;
        issue: string;
    }
    interface Actions {
        [action: string]: ReadonlyArray<Action>;
    }
    interface Result {
        refs: ReadonlyArray<Reference>;
        mentions: ReadonlyArray<Mention>;
        actions: Actions;
        allRefs: Array<Reference | Action>;
    }
}

export = issueParser;
