import * as Trello from "trellopowerup";

// Permissions
const readPerm: Trello.PowerUp.Permissions = "read";
const writePerm: Trello.PowerUp.Permissions = "write";
// @ts-expect-error - invalid permission
const invalidPerm: Trello.PowerUp.Permissions = "admin";

// Context
const ctx: Trello.PowerUp.Context = {
    board: "boardId",
    card: "cardId",
    command: "show-settings",
    member: "memberId",
    organization: "orgId",
    enterprise: "enterpriseId",
    permissions: {
        board: "read",
        card: "write",
        organization: "read",
    },
    version: "1.0.0",
    locale: "en-US",
    theme: "dark",
    initialTheme: "light",
    el: "elementId",
    plugin: "pluginId",
};
// $ExpectType string
ctx.board;
// $ExpectType string | undefined
ctx.card;
// $ExpectType string | undefined
ctx.command;
// $ExpectType string
ctx.member;
// $ExpectType string | undefined
ctx.organization;
// $ExpectType string | undefined
ctx.enterprise;
// $ExpectType { board: Permissions; card: Permissions; organization: Permissions; } | undefined
ctx.permissions;
// $ExpectType string
ctx.version;
// $ExpectType string
ctx.locale;
// $ExpectType string
ctx.theme;
// $ExpectType string
ctx.initialTheme;
// $ExpectType string
ctx.el;
// $ExpectType string
ctx.plugin;

// @ts-expect-error - missing required property 'board'
const invalidCtx1: Trello.Context = {
    member: "memberId",
    version: "1.0.0",
    locale: "en-US",
    theme: "dark",
    initialTheme: "light",
    el: "elementId",
    plugin: "pluginId",
};

// @ts-expect-error - permissions.board must be 'read' or 'write'
const invalidCtx2: Trello.Context = {
    board: "boardId",
    member: "memberId",
    version: "1.0.0",
    locale: "en-US",
    theme: "dark",
    initialTheme: "light",
    el: "elementId",
    plugin: "pluginId",
    permissions: {
        board: "admin",
        card: "write",
        organization: "read",
    },
};
