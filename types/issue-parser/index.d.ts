declare function issueParser(
    authOptions?: issueParser.Options,
    extension?: issueParser.Overrides,
): issueParser.Parser;

declare namespace issueParser {
    type Parser = (text: string) => Result;
    interface Overrides {
        actions?: {
            [type: string]: ReadonlyArray<string>;
        } | undefined;
        delimiters?: string | ReadonlyArray<string> | undefined;
        mentionsPrefixes?: string | ReadonlyArray<string> | undefined;
        issuePrefixes?: string | ReadonlyArray<string> | undefined;
        hosts?: string | ReadonlyArray<string> | undefined;
        issueURLSegments?: string | ReadonlyArray<string> | undefined;
        overrides?: string | ReadonlyArray<string> | undefined;
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
