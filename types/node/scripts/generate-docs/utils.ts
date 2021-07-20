export function replaceLineBreaks(input: string): string {
    return input.replaceAll('\n', ' ');
}

const newline = '\n';
export function wordWrap(str: string, width: number): string {
    const words = str.split(' ');

    let curLineLength = 0;
    const out = [];
    for (let word of words) {
        if (curLineLength + (word.length + 1) > width) {
            if (curLineLength > 0) {
                out.push(newline);
                curLineLength = 0;
            }

            while (word.length > width) {
                out.push(word.substr(0, width - 1) + "-");
                word = word.substr(width - 1);

                out.push(newline);
            }
        }
        out.push(word);
        out.push(' ');
        curLineLength += word.length + 1;
    }
    return out.join('');
}

// tslint:disable-next-line: no-unnecessary-generics
export function contextDeduper<C, I>(): ((context: C, item: I) => boolean) {
    const dedupe = new Map<C, Set<I>>();
    return (context: C, item: I): boolean => {
        if (dedupe.get(context)?.has(item)) {
            return true;
        }
        if (!dedupe.has(context)) {
            dedupe.set(context, new Set());
        }
        dedupe.get(context)?.add(item);
        return false;
    };
}
