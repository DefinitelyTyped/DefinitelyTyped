import { parse } from 'html-parser';

parse(`<tag '' />`, {
    attribute(name: string, value: string) {
        attributes[name] = value;
    }
});
