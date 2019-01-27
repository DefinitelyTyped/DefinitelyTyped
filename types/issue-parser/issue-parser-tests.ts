import issueParser = require("issue-parser");
import { Action } from "issue-parser";

// Without options
issueParser();

// With predefined options
issueParser("github");
issueParser("bitbucket");
issueParser("gitlab");
issueParser("waffle");

// With custom format
issueParser({
    actions: {
        fix: ["complete"],
        hold: ["holds up"]
    },
    issuePrefixes: ["🐛"]
});

// Extend existing format
issueParser("github", {
    actions: {
        parent: ["parent of"],
        related: ["related to"]
    }
});

const parse = issueParser("github");
const result = parse("#1");

// Parse references
result.refs.forEach(ref => {
    ref.issue;
    ref.slug;
    ref.raw;
    ref.prefix;
});

// Parse closing keywords
result.actions.close.forEach(action => {
    action.raw;
    action.action;
    action.slug;
    action.prefix;
    action.issue;
});

// Parse user mentions
result.mentions.forEach(mention => {
    mention.raw;
    mention.prefix;
    mention.user;
});

// allRefs
const isAction = (ref: any): ref is Action => true;
result.allRefs.forEach(ref => {
    if (isAction(ref)) {
        ref.raw;
        ref.action;
        ref.slug;
        ref.prefix;
        ref.issue;
    } else {
        ref.raw;
        ref.slug;
        ref.prefix;
        ref.issue;
    }
});
