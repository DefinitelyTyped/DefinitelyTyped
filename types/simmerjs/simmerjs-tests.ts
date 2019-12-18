import Simmer from "simmerjs";

const simmer = new Simmer(window); // $ExpectType Simmer
Simmer(window); // $ExpectType Simmer
new Simmer(document);
new Simmer(document.body);
new Simmer(window, {
    depth: 1,
    errorHandling: true,
    specificityThreshold: 2,
    selectorMaxLength: 4
});
new Simmer(window, {
    errorHandling: (error: any, element: Element) => console.error(error, element)
});

const queryEngine = (selector: string, onError: (error: any) => void): ArrayLike<Element> => [];
new Simmer({ querySelectorAll: queryEngine });
new Simmer({ document: { querySelectorAll: queryEngine } });
new Simmer(window, { depth: 1 }, queryEngine);
const selector = simmer(document.body); // $ExpectType string

window.Simmer(document.body); // $ExpectType string
window.Simmer.noConflict();
window.Simmer.configure({ selectorMaxLength: 2 });
