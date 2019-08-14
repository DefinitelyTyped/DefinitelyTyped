import {
    html,
    safeHtml,
    oneLine,
    oneLineTrim,
    stripIndent,
    stripIndents,
    inlineLists,
    oneLineInlineLists,
    commaLists,
    commaListsOr,
    commaListsAnd,
    oneLineCommaLists,
    oneLineCommaListsOr,
    oneLineCommaListsAnd,
    id,
    TemplateTag,
    trimResultTransformer,
    stripIndentTransformer,
    replaceResultTransformer,
    replaceSubstitutionTransformer,
    inlineArrayTransformer,
    splitStringTransformer,
    createTag,
    TemplateTransformer,
    replaceStringTransformer,
} from 'common-tags';

const userMessages = ['hi', 'what are you up to?', '<script>alert("something evil")</script>'];
html`
    <div class="chat-list">
        <ul>
            ${userMessages.map(message => safeHtml`<li>${message}</li>`)}
        </ul>
    </div>
`;

oneLine`
  foo
  bar
  baz
`;

oneLineTrim`
  https://news.com/article
  ?utm_source=designernews.co
`;

const verb = 'notice';
stripIndent`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    But we do want to keep this line indented.
`;

stripIndents`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    We don't want to keep this line indented either.
`;

inlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

oneLineInlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commaLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

oneLineCommaLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

oneLineCommaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

oneLineCommaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

id`hello ${'world'}`;

oneLine(String.raw)`
  foo
  bar\nbaz
`;

stripIndent('  foo\n    bar');

const doNothing = createTag();
doNothing`foo bar`;

const substitutionReplacer = (oldValue: string, newValue: string): TemplateTransformer => ({
    onSubstitution(substitution, resultSoFar) {
        if (substitution === oldValue) {
            return newValue;
        }
        return substitution;
    },
});

const replaceFizzWithBuzz = createTag(substitutionReplacer('fizz', 'buzz'));
replaceFizzWithBuzz`foo bar ${'fizz'}`;

createTag();
createTag(substitutionReplacer('fizz', 'buzz'));
createTag(substitutionReplacer('fizz', 'buzz'), substitutionReplacer('foo', 'bar'));
createTag([substitutionReplacer('fizz', 'buzz'), substitutionReplacer('foo', 'bar')]);
new TemplateTag();
new TemplateTag(substitutionReplacer('fizz', 'buzz'));
new TemplateTag(substitutionReplacer('fizz', 'buzz'), substitutionReplacer('foo', 'bar'));
new TemplateTag([substitutionReplacer('fizz', 'buzz'), substitutionReplacer('foo', 'bar')]);

const tt: TemplateTransformer<{ foo: string }> = {
    getInitialContext() {
        return { foo: 'bar' };
    },
    onString(str, context) {
        // $ExpectType string
        str;
        // $ExpectType { foo: string; }
        context;
        return '';
    },
    onSubstitution(substitution, resultSoFar, context) {
        // $ExpectType string
        substitution;
        // $ExpectType string
        resultSoFar;
        // $ExpectType { foo: string; }
        context;
        return '';
    },
    onEndResult(endResult, context) {
        // $ExpectType string
        endResult;
        // $ExpectType { foo: string; }
        context;
        return '';
    },
};

createTag({});
createTag(tt);
createTag({
    onString: str => `${str}!`,
});
createTag({
    onSubstitution: substitution => `${substitution}!`,
});
createTag({
    onEndResult: endResult => `${endResult}!`,
});
new TemplateTag({});
new TemplateTag(tt);
new TemplateTag({
    onString: str => `${str}!`,
});
new TemplateTag({
    onSubstitution: substitution => `${substitution}!`,
});
new TemplateTag({
    onEndResult: endResult => `${endResult}!`,
});

createTag(trimResultTransformer());
createTag(trimResultTransformer(''));
createTag(trimResultTransformer('start'));
createTag(trimResultTransformer('end'));
createTag(trimResultTransformer('left'));
createTag(trimResultTransformer('right'));

createTag(stripIndentTransformer());
createTag(stripIndentTransformer('initial'));
createTag(stripIndentTransformer('all'));

createTag(replaceResultTransformer('foo', 'bar'));
createTag(replaceResultTransformer(/baz/g, 'bar'));
createTag(
    replaceResultTransformer(/baz/g, (substring, ...matches) => {
        // $ExpectType string
        substring;
        // $ExpectType any[]
        matches;
        return '';
    })
);

createTag(replaceSubstitutionTransformer('foo', 'bar'));
createTag(replaceSubstitutionTransformer(/baz/g, 'bar'));
createTag(
    replaceSubstitutionTransformer(/baz/g, (substring, ...matches) => {
        // $ExpectType string
        substring;
        // $ExpectType any[]
        matches;
        return '';
    })
);

createTag(replaceStringTransformer('foo', 'bar'));
createTag(replaceStringTransformer(/baz/g, 'bar'));
createTag(
    replaceStringTransformer(/baz/g, (substring, ...matches) => {
        // $ExpectType string
        substring;
        // $ExpectType any[]
        matches;
        return '';
    })
);

createTag(inlineArrayTransformer());
createTag(inlineArrayTransformer({}));
createTag(inlineArrayTransformer({ separator: 'foo' }));
createTag(inlineArrayTransformer({ conjunction: 'bar' }));
createTag(inlineArrayTransformer({ serial: true }));

createTag(splitStringTransformer('foo'));
