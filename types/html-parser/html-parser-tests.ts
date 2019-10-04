import { parse } from 'html-parser';

parse(`<tag '' />`, {});
parse('');
parse('', {}, {});

parseFile();
sanitize();
