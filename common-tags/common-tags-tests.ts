import * as commonTags from 'common-tags';

/* Test Built-in Tags */

commonTags.commaLists `
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.commaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.commaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

let fruits = ['apple', 'orange', 'watermelon'];

commonTags.html`
  <div class="list">
    <ul>
      ${fruits.map(fruit => `<li>${fruit}</li>`)}
      ${'<li>kiwi</li>\n<li>guava</li>'}
    </ul>
  </div>
`;

commonTags.codeBlock`
  <div class="list">
    <ul>
      ${fruits.map(fruit => `<li>${fruit}</li>`)}
      ${'<li>kiwi</li>\n<li>guava</li>'}
    </ul>
  </div>
`;

commonTags.source`
  <div class="list">
    <ul>
      ${fruits.map(fruit => `<li>${fruit}</li>`)}
      ${'<li>kiwi</li>\n<li>guava</li>'}
    </ul>
  </div>
`;

commonTags.oneLine`
  foo
  bar
  baz
`;

commonTags.oneLineTrim`
  https://news.com/article
  ?utm_source=designernews.co
`;

commonTags.oneLineCommaLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.oneLineCommaListsOr`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.oneLineCommaListsAnd`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.inlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

commonTags.oneLineInlineLists`
  I like ${['apples', 'bananas', 'watermelons']}
  They're good!
`;

let verb = 'notice';

commonTags.stripIndent`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    But we do want to keep this line indented.
`;

commonTags.stripIndents`
  This is a multi-line string.
  You'll ${verb} that it is indented.
  We don't want to output this indentation.
    We don't want to keep this line indented either.
`;

/* Test Tag Constructor */

new commonTags.TemplateTag();

const substitutionReplacer = (oldValue : string, newValue : string) => ({
    onSubstitution(substitution : string, resultSoFar : string) {
        if (substitution === oldValue) {
            return newValue;
        }
        return substitution;
    }
});

new commonTags.TemplateTag(substitutionReplacer('fizz', 'buzz'));

new commonTags.TemplateTag(
    substitutionReplacer('fizz', 'buzz'),
    substitutionReplacer('foo', 'bar')
);

new commonTags.TemplateTag([
    substitutionReplacer('fizz', 'buzz'),
    substitutionReplacer('foo', 'bar')
]);

new commonTags.TemplateTag({});

new commonTags.TemplateTag({
    onEndResult: endResult => `${endResult}!`
});

new commonTags.TemplateTag({
    onSubstitution: substitution => `${substitution}!`,
    onEndResult: endResult => `${endResult}!`
});

/* Tests Built-in Transformers */

new commonTags.TemplateTag(commonTags.trimResultTransformer());
new commonTags.TemplateTag(commonTags.trimResultTransformer('left'));
new commonTags.TemplateTag(commonTags.trimResultTransformer('right'));

new commonTags.TemplateTag(commonTags.stripIndentTransformer());
new commonTags.TemplateTag(commonTags.stripIndentTransformer('initial'));
new commonTags.TemplateTag(commonTags.stripIndentTransformer('all'));

new commonTags.TemplateTag(commonTags.replaceResultTransformer('foo', 'bar'));

new commonTags.TemplateTag(commonTags.inlineArrayTransformer());
new commonTags.TemplateTag(commonTags.inlineArrayTransformer({}));
new commonTags.TemplateTag(commonTags.inlineArrayTransformer({separator: 'foo'}));
new commonTags.TemplateTag(commonTags.inlineArrayTransformer({conjunction: 'bar'}));

new commonTags.TemplateTag(commonTags.splitStringTransformer('foo'));
