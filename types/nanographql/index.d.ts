export = nanographql;

declare function nanographql(query: TemplateStringsArray | string): (variables?: object) => string;
