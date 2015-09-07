///<reference path='reflect-metadata.d.ts' />

function decoratorA(target : any) { /* do nothing*/ return target; }
function decoratorB(target : any) { /* do nothing*/ return target; }

class C { }
var decoratedC = Reflect.decorate([decoratorA, decoratorB], C);

Reflect.defineMetadata("custom:annotation", {}, C);

function MyAnnotation(options): ClassDecorator {
  return target => Reflect.defineMetadata("custom:annotation", options, target);
}
