// Type definitions for jira2slack 1.2
// Project: https://github.com/shaunburdick/jira2slack#readme
// Definitions by: Rob Anderson <https://github.com/McTalian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Convert JIRA markdown to Slack markdown
 */
export function toSlack(jiraMD: string): string;

/**
 * Convert Slack markdown to Jira markdown
 */
export function toJira(slackMD: string): string;
