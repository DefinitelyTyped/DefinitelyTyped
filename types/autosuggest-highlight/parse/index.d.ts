declare function parse(text: string, matches: Array<[number, number]>): Array<{ text: string; highlight: boolean }>;

export default parse;
