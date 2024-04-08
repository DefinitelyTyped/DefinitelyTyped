import Destination from "./parse_link_destination.mjs";

declare function parseLinkTitle(str: string, pos: number, max: number): Destination.ParseResult;

export default parseLinkTitle;
