///// <reference path="core-decorators.d.ts" />
//
////
//// @autobind
////
//
//import { autobind } from 'core-decorators';
//
//class Person {
//    @autobind
//    getPerson() {
//        return this;
//    }
//}
//
//let person = new Person();
//let getPerson = person.getPerson;
//
//getPerson() === person;
//
////
//// @readonly
////
//
//import { readonly } from 'core-decorators';
//
//class Meal {
//    @readonly
//    entree: string = 'steak';
//}
//
//var dinner = new Meal();
//dinner.entree = 'salmon';
//
////
//// @override
////
//
//import { override } from 'core-decorators';
//
//class Parent {
//    speak(first: string, second: string) {}
//}
//
//class Child extends Parent {
//    @override
//    speak() {}
//    // SyntaxError: Child#speak() does not properly override Parent#speak(first, second)
//}
//
//// or
//
//class Child2 extends Parent {
//    @override
//    speaks() {}
//    // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.
//    //
//    //   Did you mean "speak"?
//}
//
////
//// @deprecate (alias: @deprecated)
////
//
//import { deprecate, deprecated } from 'core-decorators';
//
//class Person2 {
//    @deprecate
//    facepalm() {}
//
//    @deprecate('We stopped facepalming')
//    facepalmHard() {}
//
//    @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
//    facepalmHarder() {}
//}
//
//let person2 = new Person2();
//
//person2.facepalm();
//// DEPRECATION Person#facepalm: This function will be removed in future versions.
//
//person2.facepalmHard();
//// DEPRECATION Person#facepalmHard: We stopped facepalming
//
//person2.facepalmHarder();
//// DEPRECATION Person#facepalmHarder: We stopped facepalming
////
////     See http://knowyourmeme.com/memes/facepalm for more details.
////
//
////
//// @debounce
////
//
//import { debounce } from 'core-decorators';
//
//class Editor {
//
//    content = '';
//
//    @debounce(500)
//    updateContent(content: string) {
//        this.content = content;
//    }
//}
//
////
//// @suppressWarnings
////
//
//import { suppressWarnings } from 'core-decorators';
//
//class Person3 {
//    @deprecated
//    facepalm() {}
//
//    @suppressWarnings
//    facepalmWithoutWarning() {
//        this.facepalm();
//    }
//}
//
//let person3 = new Person3();
//
//person3.facepalmWithoutWarning();
//// no warning is logged
//
////
//// @nonenumerable
////
//
//import { nonenumerable } from 'core-decorators';
//
//class Meal2 {
//    entree = 'steak';
//
//    @nonenumerable
//    cost: number = 4.44;
//}
//
//var dinner2 = new Meal2();
//for (var key in dinner2) {
//    key;
//    // "entree" only, not "cost"
//}
//
//Object.keys(dinner2);
//// ["entree"]
//
////
//// @nonconfigurable
////
//
//import { nonconfigurable } from 'core-decorators';
//
//class Meal3 {
//    @nonconfigurable
//    entree: string = 'steak';
//}
//
//var dinner3 = new Meal3();
//
//Object.defineProperty(dinner3, 'entree', {
//    enumerable: false
//});
//// Cannot redefine property: entree
//
//
