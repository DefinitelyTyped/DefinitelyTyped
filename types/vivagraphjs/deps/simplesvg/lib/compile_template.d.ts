export = template;
declare function template(domNode: Element): {
    link: (model: object) => void;
};
