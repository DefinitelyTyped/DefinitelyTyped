import * as MarkdownIt from "markdown-it";

import * as markdownlint from "markdownlint";
import * as helpers from "markdownlint-rule-helpers";

// $ExpectType RegExp
helpers.newLineRe;

// $ExpectType RegExp
helpers.frontMatterRe;

// $ExpectType RegExp
helpers.inlineCommentStartRe;

// $ExpectType RegExp
helpers.listItemMarkerRe;

// $ExpectType RegExp
helpers.orderedListItemMarkerRe;

// $ExpectType RegExp
helpers.blockquotePrefixRe;

// $ExpectType RegExp
helpers.linkReferenceDefinitionRe;

// $ExpectType RegExp
helpers.endOfLineHtmlEntityRe;

// $ExpectType RegExp
helpers.endOfLineGemojiCodeRe;

// $ExpectType RegExp
helpers.startsWithPipeRe;

declare const valueUnknown: unknown;
declare const valueString: string;

if (helpers.isNumber(valueUnknown)) {
    // $ExpectType number
    valueUnknown;
}

if (helpers.isString(valueUnknown)) {
    // $ExpectType string
    valueUnknown;
}

if (helpers.isEmptyString(valueString)) {
    // $ExpectType ""
    valueString;
}

if (helpers.isUrl(valueUnknown)) {
    // $ExpectType URL
    valueUnknown;
}

// $ExpectType ""
helpers.cloneIfArray("");

// $ExpectType string[]
helpers.cloneIfArray([""]);

// $ExpectType ""
helpers.cloneIfUrl("");

// $ExpectType string[]
helpers.cloneIfUrl([""]);

// $ExpectType boolean
helpers.isBlankLine("");

// $ExpectType number
helpers.numericSortAscending(0, 0);

// $ExpectType boolean
helpers.includesSorted([""], "");

// $ExpectType boolean
helpers.includesSorted([0], 0);

// $ExpectType string
helpers.clearHtmlCommentText("");

// $ExpectType string
helpers.escapeForRegExp("");

// $ExpectType string
helpers.fencedCodeBlockStyleFor("");

// $ExpectType string
helpers.emphasisOrStrongStyleFor("");

declare const token: MarkdownIt.Token;

// $ExpectType number
helpers.indentFor(token);

// $ExpectType string
helpers.headingStyleFor(token);

// $ExpectType string
helpers.unorderedListStyleFor(token);

declare const ruleParams: any;

// $ExpectType void
helpers.filterTokens(ruleParams, "heading", (_token: MarkdownIt.Token) => {});

// $ExpectType LineMetadata[]
helpers.getLineMetadata(ruleParams);

declare const lineMetadata: helpers.LineMetadata;

// $ExpectType void
helpers.forEachLine([lineMetadata], (_metadata: helpers.LineMetadata) => {});

// $ExpectType FlattenedList[]
helpers.flattenLists([token]);

// $ExpectType void
helpers.forEachHeading(ruleParams, (_heading: MarkdownIt.Token, _content: string, _token: MarkdownIt.Token) => {});

// $ExpectType void
helpers.forEachInlineCodeSpan("", (_code: string, _lineIndex: number, _columnIndex: number, _ticks: number) => {});

// $ExpectType string
helpers.ellipsify("");

// $ExpectType string
helpers.ellipsify("", true, true);

declare const onError: (info: markdownlint.RuleOnErrorInfo) => void;
declare const fixInfo: markdownlint.RuleOnErrorFixInfo;

// $ExpectType void
helpers.addError(onError, 0);

// $ExpectType void
helpers.addError(onError, 0, "", "", [0, 0], fixInfo);

// $ExpectType void
helpers.addErrorDetailIf(onError, 0, "", "", "", "", [0, 0], fixInfo);

// $ExpectType void
helpers.addErrorContext(onError, 0, "", 0, 0, [0, 0], fixInfo);

// $ExpectType number[][]
helpers.codeBlockAndSpanRanges(ruleParams, lineMetadata);

// $ExpectType boolean
helpers.withinAnyRange([[0, 0]], 0, 0, 0);

// $ExpectType [number, number]
helpers.rangeFromRegExp("", / /);

// $ExpectType boolean
helpers.frontMatterHasTitle([""]);

// $ExpectType boolean
helpers.frontMatterHasTitle([""], "");

// $ExpectType ReferenceLinkImageData
helpers.getReferenceLinkImageData(ruleParams);

declare const os: typeof import("node:os");

// $ExpectType string
helpers.getPreferredLineEnding("");
helpers.getPreferredLineEnding("", os);

// $ExpectType RuleOnErrorFixInfo
helpers.normalizeFixInfo(fixInfo);
helpers.normalizeFixInfo(fixInfo, 0);

// $ExpectType string | null
helpers.applyFix("", fixInfo, "");

declare const onErrorInfo: markdownlint.RuleOnErrorInfo;

// $ExpectType string
helpers.applyFixes("", [onErrorInfo]);

// $ExpectType string
helpers.expandTildePath("", os);
