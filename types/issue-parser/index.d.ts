declare function issueParser(
    authOptions?: issueParser.Options,
    extension?: issueParser.Overrides,
): issueParser.Parser;

declare namespace issueParser {
    type Parser = (text: string) => Result;
    interface Overrides {
        actions?: {
            [type: string]: readonly string[];
        } | undefined;
        delimiters?: string | readonly string[] | undefined;
        mentionsPrefixes?: string | readonly string[] | undefined;
        issuePrefixes?: string | readonly string[] | undefined;
        hosts?: string | readonly string[] | undefined;
        issueURLSegments?: string | readonly string[] | undefined;
        overrides?: string | readonly string[] | undefined;
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
        [action: string]: readonly Action[];
    }
    interface Result {
        refs: readonly Reference[];
        mentions: readonly Mention[];
        actions: Actions;
        allRefs: Array<Reference | Action>;
    }
}

export = issueParser;
