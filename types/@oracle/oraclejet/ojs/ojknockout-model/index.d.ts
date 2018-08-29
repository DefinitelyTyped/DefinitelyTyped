/// <reference types='knockout'/>
declare namespace oj {  
  class KnockoutUtils {
    static map(m: object, callback?: ((param0: object)=> void), array?: boolean): Array<KnockoutObservable<any>>|KnockoutObservableArray<any>;
  }

}
