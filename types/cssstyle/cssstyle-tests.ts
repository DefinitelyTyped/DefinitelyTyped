import { CSSStyleDeclaration } from 'cssstyle';

// $ExpectType CSSStyleDeclaration
const style = new CSSStyleDeclaration(text => {
    text; // $ExpectType string
});

style.cssText; // $ExpectType string
style.length; // $ExpectType number

style.getPropertyValue; // $ExpectType (name: string) => string
style.getPropertyPriority; // $ExpectType (name: string) => string
style.removeProperty; // $ExpectType (name: string) => string
style.setProperty; // $ExpectType (name: string, value: string | null, priority?: string | null | undefined) => void

style.item; // $ExpectType (index: number) => string
