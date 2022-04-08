import { parse, parseFile, sanitize, RegExpOptions, CallbacksOption, Token } from 'html-parser';

// test data
const attributes = (arg: string) => arg;
const elements = (arg: string) => arg;
const comments = (arg: boolean) => arg;
const docTypes = (arg: boolean) => arg;
const attribute = (name: string, value: string) => {};
const openElement = (tagName: string) => {};
const closeOpenedElement = (tagName: string, token: Token, isUnary: boolean) => {};
const closeElement = (name: string) => {};
const comment = (content: string) => {};
const docType = (content: string) => {};
const cdata = (content: string) => {};
const xmlProlog = () => {};
const text = (value: string) => {};
const emptyRegExpOptions: RegExpOptions = {};
const filledRegExpOptions: RegExpOptions = {attribute: new RegExp(''), name: new RegExp('')};
const emptyCallbackOptions: CallbacksOption = {};
const filled: CallbacksOption = {
    attribute,
    openElement,
    closeOpenedElement,
    closeElement,
    comment,
    docType,
    cdata,
    xmlProlog,
    text
};

// parse tests:
parse('');
parse('', emptyCallbackOptions, emptyRegExpOptions);
parse('', filled, filledRegExpOptions);

// parseFile tests:
parseFile('', '', emptyCallbackOptions, attributes);
parseFile('', '', filled, attributes);

// sanitize tests:
sanitize('');
sanitize('', {attributes: [ 'hello' ], elements: [ 'hi' ], comments: true, docTypes: false});
sanitize('', {attributes, elements, comments, docTypes });
