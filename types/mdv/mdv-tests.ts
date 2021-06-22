import { Options, Warnings } from 'mdv';
import mdv = require('mdv');

const options: Options = {
    source: './some.md',
    save: true,
    warnings: false,
};
const result = mdv.validate(`# Markdown Validator`, options); // $ExpectType ValidateResults
// $ExpectType ValidateResults & Warnings
const warnings: Warnings = mdv.validate('# Markdown Validator', {
    warnings: true,
});

result.anchorsWithEmptyText; // $ExpectType Anchor[]
result.anchorsWithHash; // $ExpectType Anchor[]
result.duplicatedAnchors; // $ExpectType Anchor[]
result.imagesWithMissingAlt; // $ExpectType number
result.localRefNoHash; // $ExpectType Anchor[]
result.missingAnchors; // $ExpectType Anchor[]
result.nonParsingExamples; // $ExpectType NonParsedEntry[]
result.source; // $ExpectType string

warnings.anchorsWithNoLinks; // $ExpectType Anchor[]
warnings.codeBlocksWithNoLanguage; // $ExpectType number
