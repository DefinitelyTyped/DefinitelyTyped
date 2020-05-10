import Destination = require('./parse_link_destination');

declare namespace parseLinkTitle {}

declare function parseLinkTitle(str: string, pos: number, max: number): Destination.ParseResult;

export = parseLinkTitle;
