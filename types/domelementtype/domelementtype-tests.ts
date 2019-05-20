import { DomElementType } from "domelementtype";

console.log(DomElementType.Text === 'text');
console.log(DomElementType.Directive === 'directive');
console.log(DomElementType.Comment === 'comment');
console.log(DomElementType.Script === 'script');
console.log(DomElementType.Style === 'style');
console.log(DomElementType.Tag === 'tag');
console.log(DomElementType.CDATA === 'cdata');
console.log(DomElementType.Doctype === 'doctype');
console.log(DomElementType.isTag({ type: DomElementType.Tag }));
console.log(DomElementType.isTag({ type: DomElementType.Doctype }));
